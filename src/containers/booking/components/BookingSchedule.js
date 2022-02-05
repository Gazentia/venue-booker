import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./booking-schedule.scss";
import BookingTimeline from "./BookingTimeline";

const BookingSchedule = () => {
  const booking = useSelector((state) => state.booking);
  return (
    <>
      <div className='booking__schedule'>
        <div className='booking__schedule-filter'>
          <NavLink
            className='booking__schedule-tab'
            activeClassName='active'
            to={`/bookings/today/?roomId=${booking.roomId}`}
          >
            TODAY
          </NavLink>
          <NavLink
            className='booking__schedule-tab'
            activeClassName='active'
            to={`/bookings/week/?roomId=${booking.roomId}`}
          >
            THIS WEEK
          </NavLink>
          <NavLink
            className='booking__schedule-tab'
            activeClassName='active'
            to={`/bookings/nextweek/?roomId=${booking.roomId}`}
          >
            NEXT WEEK
          </NavLink>
        </div>
        <BookingTimeline timeline={booking.events} />
      </div>
    </>
  );
};

export default BookingSchedule;
