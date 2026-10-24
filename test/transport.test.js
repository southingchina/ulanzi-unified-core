import test from 'node:test';
import assert from 'node:assert/strict';
import {WebSocketServer} from 'ws';
import {once} from 'node:events';
import {StudioTransport,parseConnection} from '../host/transport.js';
test('connection arguments persist and real loopback transport registers and reconnects',async()=>{
  const server=new WebSocketServer({host:'127.0.0.1',port:0});await once(server,'listening');
  const config=parseConnection(['127.0.0.1',String(server.address().port),'zh_CN']);
  assert.equal(config.language,'zh_CN');const t=new StudioTransport({...config,retryMs:20});
  try{
    let socket=once(server,'connection');t.start();let [ws]=await socket;const [raw]=await once(ws,'message');
    assert.equal(JSON.parse(raw).cmd,'connected');assert.equal(t.send({cmd:'test'}),true);
    const opened=once(t,'connected');socket=once(server,'connection');ws.terminate();await opened;
    [ws]=await socket;assert.equal(t.config.port,server.address().port);
  }finally{t.stop();for(const c of server.clients)c.terminate();await new Promise(r=>server.close(r));}
});
