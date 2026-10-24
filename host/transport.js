import WebSocket from 'ws';
import {EventEmitter} from 'node:events';
import {PLUGIN} from './actions.js';
export function parseConnection(args=process.argv.slice(2)){
  const [address='127.0.0.1',port='3906',language='zh_CN']=args;
  if(!Number.isInteger(Number(port))||Number(port)<1||Number(port)>65535)throw Error('Invalid Studio port');
  return Object.freeze({address,port:Number(port),language});
}
export class StudioTransport extends EventEmitter{
  constructor(config){super();this.config=Object.freeze({...config});this.generation=0;this.stopped=true;this.retryMs=config.retryMs??1000;}
  get connected(){return this.socket?.readyState===WebSocket.OPEN;}
  start(){this.stopped=false;this.connect();}
  connect(){
    if(this.stopped)return;clearTimeout(this.retry);const gen=++this.generation;
    this.socket?.terminate();const socket=new WebSocket(`ws://${this.config.address}:${this.config.port}`);this.socket=socket;
    socket.on('open',()=>{if(gen!==this.generation)return;this.send({cmd:'connected',uuid:PLUGIN,code:0});this.emit('connected',gen);});
    socket.on('message',raw=>{if(gen!==this.generation)return;try{this.emit('message',JSON.parse(raw));}catch(e){this.emit('protocol-error',e);}});
    socket.on('error',e=>this.emit('connection-error',e));
    socket.on('close',()=>{if(gen!==this.generation||this.stopped)return;this.emit('disconnected',gen);clearTimeout(this.retry);this.retry=setTimeout(()=>this.connect(),this.retryMs);});
  }
  send(m){if(!this.connected)return false;try{this.socket.send(JSON.stringify(m),e=>{if(e)this.emit('connection-error',e);});return true;}catch{return false;}}
  stop(){this.stopped=true;this.generation++;clearTimeout(this.retry);this.socket?.terminate();}
}
