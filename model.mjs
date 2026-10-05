// A small fictional shift, never production Georgetown records.
const statuses = ['ready','pending','ready','issue','ready','pending','ready','ready','pending','ready','issue','pending'];
export const rooms = Object.freeze(statuses.map((status, i) => Object.freeze({
  id: String(101+i), status, inspector: `Inspector ${i%4+1}`,
  group: i<6 ? 'Program A' : 'Program B', arrival: i<6 ? '14:00' : '16:00',
  type: [3,10].includes(i) ? 'Shared kitchen' : 'Residence room',
  note: i===3 ? 'The inspector reported a sink leak. The work order is awaiting maintenance.' : i===10 ? 'The inspector reported an appliance fault. The work order is awaiting maintenance.' : status==='pending' ? 'The inspector has an assignment but has not recorded a result.' : 'The room passed inspection and is ready for arrival.'
})));
export const labels = Object.freeze({ready:'Ready',pending:'To inspect',issue:'Needs attention'});
export function filterRooms(status) { return status === 'all' ? [...rooms] : rooms.filter(room => room.status === status); }
export function getRoom(id) { return rooms.find(room => room.id === id); }
export function summarize(list) {
 return list.reduce((counts, room) => { counts.total++; counts[room.status]++; return counts; }, {total:0,ready:0,pending:0,issue:0});
}
