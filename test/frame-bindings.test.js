import test from 'node:test';
import assert from 'node:assert/strict';
import {FrameBindings} from '../host/frame-bindings.js';
test('a press pins the submitted action even if a new frame arrives before run',()=>{
  const f=new FrameBindings();f.commit('c',{kind:'open',sessionId:'A'});f.down('c');
  f.commit('c',{kind:'open',sessionId:'B'});assert.equal(f.action('c').sessionId,'A');
  f.release('c');assert.equal(f.action('c').sessionId,'B');
});
test('cleared contexts have no pending click target',()=>{
  const f=new FrameBindings();f.commit('c',{kind:'open',sessionId:'A'});f.down('c');f.remove('c');assert.equal(f.action('c'),undefined);
});
