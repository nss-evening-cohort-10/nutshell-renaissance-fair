import eventData from './eventData';
import eventStaffData from './eventStaffData';
import staffsData from './staffsData';

const staffForEvent = (eventId) => new Promise((resolve, reject) => {
  eventStaffData.getEventStaffByEventId(eventId)
    .then((eventStaff) => {
      staffsData.getStaffsData().then((staff) => {
        const finalStaff = [];
        eventStaff.forEach((eStaff) => {
          const newStaff = staff.find((x) => x.id === eStaff.staffId);
          newStaff.eventStaffId = eStaff.id;
          finalStaff.push(newStaff);
        });
        resolve(finalStaff);
      });
    })
    .catch((error) => reject(error));
});

// Only calling stuff in this function
const completeSingleEvent = (eventId) => new Promise((resolve, reject) => {
  eventData.getEventById(eventId)
    .then((event) => {
      staffForEvent(eventId).then((eventStaff) => {
        const finalEvent = { ...event };
        finalEvent.id = eventId;
        finalEvent.staff = eventStaff;
        resolve(finalEvent);
      });
    })
    .catch((error) => reject(error));
});


export default { completeSingleEvent };
