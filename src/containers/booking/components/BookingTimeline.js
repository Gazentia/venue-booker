import "./booking-timeline.scss";
import { dateDisplay, getPeriodTime } from "core/services/helper";
import { Timeline } from "rsuite";
const NOT_FOUND = "The room booking not found.";
const BookingTimeline = (props) => {
  const { timeline } = props;
  let content = NOT_FOUND;
  if (timeline && timeline.length > 0) {
    content = (
      <Timeline endless>
        {timeline.map((timeline) => {
          return (
            <Timeline.Item key={timeline.id}>
              <p>
                {getPeriodTime(timeline.startTime, timeline.endTime) +
                  " ( " +
                  dateDisplay(timeline.startTime) +
                  " )"}
              </p>
              <p>{timeline.title}</p>
            </Timeline.Item>
          );
        })}
      </Timeline>
    );
  }
  return <div className='booking__timeline-wrapper'>{content}</div>;
};

export default BookingTimeline;
