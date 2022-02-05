import { getBookingsForPeriod } from "core/services/helper";
const dummy = [
  {
    "id": 1,
    "roomId": "A101",
    "startTime": "2022-02-14 13:00:00",
    "endTime": "2022-02-14 14:00:00",
    "title": "Lunch with Petr"
  },
  {
    "id": 2,
    "roomId": "A101",
    "startTime": "2022-02-18 14:00:00",
    "endTime": "2022-02-18 15:00:00",
    "title": "Sales Weekly Meeting"
  },
  {
    "id": 3,
    "roomId": "A101",
    "startTime": "2022-02-18 16:00:00",
    "endTime": "2022-02-18 18:00:00",
    "title": "Anastasia Website Warroom"
  },
  {
    "id": 4,
    "roomId": "A101",
    "startTime": "2022-02-19 13:00:00",
    "endTime": "2022-02-19 14:00:00",
    "title": "One-on-One Session"
  },
  {
    "id": 5,
    "roomId": "A101",
    "startTime": "2022-02-19 16:00:00",
    "endTime": "2022-02-19 18:00:00",
    "title": "UGC Sprint Planning"
  },
  {
    "id": 6,
    "roomId": "A102",
    "startTime": "2022-02-7 09:00:00",
    "endTime": "2022-10-04 18:00:00",
    "title": "5-Day Design Sprint Workshop"
  },
  {
    "id": 7,
    "roomId": "Auditorium",
    "startTime": "2022-02-19 09:00:00",
    "endTime": "2022-02-23 19:00:00",
    "title": "Thai Tech Innovation 2022"
  },
  {
    "id": 8,
    "roomId": "A101",
    "startTime": "2022-02-28 10:00:00",
    "endTime": "2022-02-28 13:00:00",
    "title": "Raimonland project"
  },
  {
    "id": 9,
    "roomId": "A102",
    "startTime": "2022-02-30 18:00:00",
    "endTime": "2022-02-30 20:00:00",
    "title": "Management Meetinng"
  },
  {
    "id": 10,
    "roomId": "A101",
    "startTime": "2022-02-05 14:00:00",
    "endTime": "2022-02-06 11:00:00",
    "title": "3-day workshop Corgi costume"
  }
];
const baseUrl = process.env.REACT_APP_API_URL;
export async function getBooking(roomId = "", filter = "today") {
  const response = await fetch(baseUrl + "/demo-booking-data.json");
  if (!response.ok) {
    throw new Error("Can't fetch booking data from server.");
  }
  let data = await response.json();
  if (!roomId) {
    return data;
  }


  data = data.filter((x) => {
    return x.roomId === roomId;
  });
  // using [dummy] data instead of [response] data
  data = getBookingsForPeriod(roomId, dummy, filter);
/*   data = getBookingsForPeriod(roomId, response, filter); */
  return data;
}
