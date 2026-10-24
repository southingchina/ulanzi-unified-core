export const PLUGIN='com.codex.unified.deck';
export const PACKAGE=PLUGIN+'.ulanziPlugin';
export const modules={cc:'com.codex.ccswitch.labels',usage:'com.codex.ulanzi.usage',agent:'com.ulanzi.ulanzistudio.agentdeck',clash:'com.codex.clash.monitor'};
const specs={cc:['connections','requests','failures','successRate','lastRequestAt'],usage:['panel','launch','antigravity','deepseek','zhipu','workbuddy','bypass-router'],agent:['key'],clash:['dashboard']};
export const actions=Object.entries(specs).flatMap(([module,names])=>names.map(name=>({module,name,legacy:modules[module]+'.'+name,uuid:PLUGIN+'.'+module+'_'+name})));
export const byUUID=new Map(actions.map(a=>[a.uuid,a]));
export const byLegacy=new Map(actions.map(a=>[a.legacy,a]));
export function context(m){return [m.uuid,m.key,m.actionid].join('___');}
export function decode(c){const [uuid,key,actionid]=c.split('___');return {uuid,key,actionid};}
