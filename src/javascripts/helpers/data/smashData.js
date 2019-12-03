import eventData from './eventData';
import foodsData from './foodsData';
import eventStaffData from './eventStaffData';
import eventFoodData from './eventFoodData';
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

const foodForEvent = (eventId) => new Promise((resolve, reject) => {
  eventFoodData.getEventFoodByEventId(eventId)
    .then((eventFood) => {
      foodsData.getFoods().then((food) => {
        const finalFood = [];
        eventFood.forEach((eFood) => {
          const newFood = food.find((x) => x.id === eFood.foodId);
          newFood.eventFoodId = eFood.id;
          finalFood.push(newFood);
        });
        resolve(finalFood);
      });
    })
    .catch((error) => reject(error));
});


// Only calling stuff in this function
const completeSingleEvent = (eventId) => new Promise((resolve, reject) => {
  eventData.getEventById(eventId)
    .then((event) => {
      staffForEvent(eventId).then((eventStaff) => {
        foodForEvent(eventId).then((eventFood) => {
          const finalEvent = { ...event };
          finalEvent.id = eventId;
          finalEvent.staffs = eventStaff;
          finalEvent.foods = eventFood;
          resolve(finalEvent);
        });
      });
    })
    .catch((error) => reject(error));
});


export default { completeSingleEvent };
