import test from 'node:test';
import assert from 'node:assert/strict';
import {Router} from '../host/router.js';
import {actions} from '../host/actions.js';
const cc=actions.find(a=>a.module==='cc'), agent=actions.find(a=>a.module==='agent');
const msg=(a,key,id)=>({cmd:'add',uuid:a.uuid,key,actionid:id,param:{kept:42}});
test('namespaced router isolates modules and tracks complete instances',()=>{
  const r=new Router();r.accept(msg(cc,'0_0','one'));r.accept(msg(cc,'1_0','two'));r.accept(msg(agent,'2_0','three'));
  assert.equal(r.active('cc').length,2);assert.equal(r.active('agent').length,1);
  assert.equal(r.translateIn(msg(agent,'2_0','three')).uuid,agent.legacy);
  assert.equal(r.outgoing('agent',{cmd:'state',uuid:cc.legacy,key:'0_0',actionid:'one'}),null);
  assert.equal(r.outgoing('agent',{cmd:'state',uuid:agent.legacy,key:'2_0',actionid:'three'}).uuid,agent.uuid);
});
test('inactive and clear unsubscribe; events for unknown instances cannot execute',()=>{
  const r=new Router(),m=msg(cc,'0_1','one');r.accept(m);
  r.accept({...m,cmd:'setactive',active:false});assert.equal(r.active('cc').length,0);
  assert.equal(r.accept({...m,cmd:'run'}).dispatch,false);
  r.accept({...m,cmd:'setactive',active:true});assert.equal(r.active('cc').length,1);
  r.accept({cmd:'clear',param:[m]});assert.equal(r.active('cc').length,0);
});
test('state statelist is routed by each nested target rather than main-service UUID',()=>{
  const r=new Router();r.accept(msg(agent,'0_0','a'));
  const good={cmd:'state',uuid:'com.ulanzi.ulanzistudio.agentdeck',param:{statelist:[{uuid:agent.legacy,key:'0_0',actionid:'a',type:1,data:'image'}]}};
  assert.equal(r.outgoing('agent',good).param.statelist[0].uuid,agent.uuid);
  good.param.statelist[0].uuid=cc.legacy;assert.equal(r.outgoing('agent',good),null);
});
