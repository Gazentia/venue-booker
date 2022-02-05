import { useSelector } from "react-redux";
import "./booking-list.scss";
import BookingItem from "./BookingItem";
import { sortCommingDate, getPeriodTime } from "core/services/helper";
const BookingList = (props) => {
  const { events } = props;
  return (
    <>
      <div className='booking__list'>
        {events && events.length > 0
          ? sortCommingDate(events)
              .slice(0, 3)
              .map((data) => {
                const eventDate = getPeriodTime(data.startTime, data.endTime);
                return (
                  <BookingItem
                    key={data.id}
                    eventDate={eventDate}
                    eventTitle={data.title}
                  />
                );
              })
          : ""}
      </div>
    </>
  );
};

export default BookingList;
