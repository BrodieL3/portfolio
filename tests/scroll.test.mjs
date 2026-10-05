import test from 'node:test';
import assert from 'node:assert/strict';
import {scrollState} from '../scroll.mjs';
test('scroll can reverse and clamps outside the exhibit',()=>{
 assert.deepEqual(scrollState(100,1000,500),{progress:0,stage:0});
 assert.deepEqual(scrollState(-500,1000,500),{progress:1,stage:2});
 assert.equal(scrollState(-250,1000,500).progress,.5);
 assert.equal(scrollState(-50,1000,500).stage,0);
});
test('short scenes produce a finite final state',()=>{
 assert.deepEqual(scrollState(-5,400,500),{progress:1,stage:2});
});
