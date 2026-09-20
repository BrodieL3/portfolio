import test from 'node:test';
import assert from 'node:assert/strict';
import { rooms, filterRooms, summarize, getRoom } from '../model.mjs';

test('inspection dashboard totals cover each sample room exactly once', () => {
 const result = summarize(rooms);
 assert.equal(result.total, 12);
 assert.equal(result.ready + result.pending + result.issue, result.total);
 assert.equal(result.issue, 2);
});
test('attention filter contains only failed inspections without changing the inventory', () => {
 const filtered = filterRooms('issue');
 assert.equal(filtered.length, 2);
 assert.ok(filtered.every(room => room.status === 'issue'));
 assert.equal(rooms.length, 12);
 assert.equal(filterRooms('all').length, 12);
});
test('a selected room exposes its own work order and unknown rooms are absent', () => {
 assert.equal(getRoom('104').status, 'issue');
 assert.match(getRoom('104').note, /sink/i);
 assert.equal(getRoom('999'), undefined);
});
