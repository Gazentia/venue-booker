import { useSelector } from "react-redux";
import "./booking-display.scss";
import BookingList from "./BookingList";
import {
  getNameDay,
  sortCommingDate,
  dateDisplay,
} from "core/services/helper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NOT_FOUND = "The room booking not found.";

const BookingDisplay = () => {
  const booking = useSelector((state) => state.booking);
  const [comingDate, setCommingDate] = useState({
    day: null,
    comingDate: null,
  });
  let content = NOT_FOUND;

  useEffect(
    (prevState) => {
      if (booking && booking.events.length > 0) {
        const date = sortCommingDate(booking.events)[0].endTime;
        setCommingDate({
          day: getNameDay(date),
          comingDate: dateDisplay(date),
        });
      } else {
        setCommingDate({
          day: null,
          comingDate: null,
        });
      }
    },
    [booking]
  );
  if (comingDate.day && comingDate.comingDate) {
    content = (
      <>
        <div className='booking__coming'>
          <small className='booking__coming-status'>Upcoming</small>
          <div className='booking__coming-wrapper'>
            <div className='booking__coming-day'>
              {comingDate.day ? comingDate.day : ""}
            </div>
            <div className='booking__coming-date'>
              {comingDate.comingDate ? comingDate.comingDate : ""}
            </div>
          </div>
        </div>
        {booking && booking.events.length > 0 ? (
          <BookingList events={booking.events} />
        ) : (
          ""
        )}
      </>
    );
  }
  return (
    <>
      <div className='booking__display'>
        <div className='booking__label'>
          {booking.roomId || "Unknown"}{" "}
          <div className='booking__rooms'>
            {booking.roomList
              .filter((x) => {
                return x !== booking.roomId;
              })
              .map((room) => {
                return (
                  <Link
                    className='booking__room-item'
                    to={`/bookings/week/?roomId=${room}`}
                    key={room}
                  >
                    {room.toUpperCase()}
                  </Link>
                );
              })}
          </div>
        </div>
        <div className='booking__display-wrapper'>{content}</div>
      </div>
    </>
  );
};

export default BookingDisplay;
