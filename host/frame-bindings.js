export class FrameBindings{
  constructor(){this.frames=new Map();this.pressed=new Map();}
  commit(context,action){this.frames.set(context,structuredClone(action));}
  down(context){if(!this.pressed.has(context))this.pressed.set(context,this.frames.get(context));}
  action(context){return this.pressed.has(context)?this.pressed.get(context):this.frames.get(context);}
  release(context){clearTimeout(this.timers?.get(context));this.timers?.delete(context);this.pressed.delete(context);}
  up(context){this.timers??=new Map();clearTimeout(this.timers.get(context));const timer=setTimeout(()=>this.release(context),500);timer.unref?.();this.timers.set(context,timer);}
  remove(context){this.frames.delete(context);this.release(context);}
  clear(){for(const c of this.pressed.keys())this.release(c);this.frames.clear();}
}
