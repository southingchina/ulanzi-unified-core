import {byUUID,byLegacy,modules,PLUGIN,context} from './actions.js';
const targeted=new Set(['state','getSettings','setSettings','showAlert','sendToPropertyInspector','paramfromplugin','workbuddy-open','workbuddy-quota-refresh']);
const globalAllowed=new Set(['logMessage','getGlobalSettings','setGlobalSettings','openurl','openview','hotkey','toast','selectdialog']);
export class Router{
  constructor(){this.instances=new Map();}
  active(module){return [...this.instances.values()].filter(i=>i.module===module&&i.active);}
  clear(){this.instances.clear();}
  translateIn(m){const a=byUUID.get(m.uuid);if(!a)return null;return {...m,uuid:a.legacy,context:context({...m,uuid:a.legacy})};}
  accept(m){
    if(m.cmd==='clear'){
      const groups=new Map();for(const it of m.param??[]){const a=byUUID.get(it.uuid);if(!a)continue;this.instances.delete(context(it));if(!groups.has(a.module))groups.set(a.module,[]);groups.get(a.module).push(this.translateIn(it));}
      return {clear:groups,dispatch:false};
    }
    const a=byUUID.get(m.uuid);if(!a)return {dispatch:false};
    const c=context(m);let i=this.instances.get(c);
    if(m.cmd==='add'||m.cmd==='setactive'){
      i={...i,...m,context:c,module:a.module,active:m.active!==false,param:m.param??i?.param??{}};
      this.instances.set(c,i);
    }else if(m.cmd==='paramfromapp'||m.cmd==='didReceiveSettings'){
      if(i)i.param=m.param??{};
    }
    return {module:a.module,dispatch:Boolean(i?.active),message:this.translateIn(m),instance:i};
  }
  outgoing(module,m){
    if(m.cmd==='state'&&Array.isArray(m.param?.statelist)){
      const list=[];
      for(const item of m.param.statelist){
        const a=byLegacy.get(item.uuid);if(!a||a.module!==module)return null;
        const mapped={...item,uuid:a.uuid};if(!this.instances.get(context(mapped))?.active)return null;
        list.push(mapped);
      }
      return list.length?{...m,uuid:PLUGIN,param:{...m.param,statelist:list}}:null;
    }
    const a=byLegacy.get(m.uuid);
    if(a){
      if(a.module!==module)return null;
      const out={...m,uuid:a.uuid};const i=this.instances.get(context(out));
      if(!i?.active)return null;
      if(!targeted.has(m.cmd)&&!globalAllowed.has(m.cmd))return null;
      return out;
    }
    if(m.uuid!==modules[module]||!globalAllowed.has(m.cmd))return null;
    return {...m,uuid:PLUGIN};
  }
}
