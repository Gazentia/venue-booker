import "./booking.scss";
import BookingDisplay from "./components/BookingDisplay";
import BookingSchedule from "./components/BookingSchedule";

const BookingContainer = () => {
  return (
    <>
      <div className='booking-container'>
        <BookingDisplay />
        <BookingSchedule />
      </div>
    </>
  );
};

export default BookingContainer;
