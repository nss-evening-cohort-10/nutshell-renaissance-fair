import eventData from './eventData';
import foodsData from './foodsData';
import eventStaffData from './eventStaffData';
import eventFoodData from './eventFoodData';
import eventSouvenirData from './eventSouvenirData';
import eventShowData from './eventShowData';
import staffsData from './staffsData';
import showData from './showData';
import souvenirData from './souvenirData';

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

// const allFoodsEvents = () => new Promise((resolve, reject) => {
//   eventFoodData.getEventFoods()
//     .then((eventFood) => {
//       foodsData.getFoods().then((foods) => {
//         const allFoods = [];
//         let isSelected = false;
//         eventFood.forEach((x) => {
//           console.log(x.foodId, foods.id);
//           if (x.foodId === foods.id) {
//             isSelected = true;
//           } else {
//             isSelected = false;
//           }
//           allFoods.event = eventFood;
//           allFoods.food = foods;
//           allFoods.event.push(isSelected);
//         });
//         resolve(allFoods);
//       });
//     })
//     .catch((error) => reject(error));
// });

const showForEvent = (eventId) => new Promise((resolve, reject) => {
  eventShowData.getEventShowByEventId(eventId)
    .then((eventShow) => {
      showData.getAllShows().then((show) => {
        const finalShow = [];
        eventShow.forEach((eShow) => {
          const newShow = show.find((x) => x.id === eShow.showId);
          newShow.eventShowId = eShow.id;
          finalShow.push(newShow);
        });
        resolve(finalShow);
      });
    })
    .catch((error) => reject(error));
});

const souvenirForEvent = (eventId) => new Promise((resolve, reject) => {
  eventSouvenirData.getEventSouvenirByEventId(eventId)
    .then((eventSouvenir) => {
      souvenirData.getSouvenirData().then((souvenir) => {
        const finalSouvenir = [];
        eventSouvenir.forEach((eSouvenir) => {
          const newSouvenir = souvenir.find((x) => x.id === eSouvenir.souvenirId);
          newSouvenir.eventSouvenirId = eSouvenir.id;
          finalSouvenir.push(newSouvenir);
        });
        resolve(finalSouvenir);
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
          showForEvent(eventId).then((eventShows) => {
            souvenirForEvent(eventId).then((eventSouvenirs) => {
              const finalEvent = { ...event };
              finalEvent.id = eventId;
              finalEvent.staffs = eventStaff;
              finalEvent.foods = eventFood;
              finalEvent.shows = eventShows;
              finalEvent.souvenirs = eventSouvenirs;
              resolve(finalEvent);
            });
          });
        });
      });
    })
    .catch((error) => reject(error));
});


export default { completeSingleEvent };
