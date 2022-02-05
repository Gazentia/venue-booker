import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooking } from "core/store/booking/booking-actions";
import Router from "./router";
import "./App.scss";
import { useLocation, matchPath } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const booking = useSelector((state) => state.booking);
  const queryParams = new URLSearchParams(location.search);
  let roomId = queryParams.get("roomId");
  const math = matchPath(location.pathname, {
    path: "/bookings/:filter",
    exact: false,
    strict: false,
  });
  let filter = "today";

  if (math && math.params.filter) {
    filter = math.params.filter;
  }
  if (!roomId) {
    roomId = booking.roomId;
  }

  useEffect(() => {
    dispatch(fetchBooking(roomId, filter));
  }, [dispatch, roomId, filter]);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
