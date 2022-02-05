import "./booking-item.scss";

const BookingItem = (props) => {
  const { eventDate, eventTitle } = props;
  return (
    <>
      <div className='booking__item'>
        <small className='booking__subtext--date'>{eventDate}</small>
        <div className='booking__title'>{eventTitle}</div>
      </div>
    </>
  );
};

export default BookingItem;
