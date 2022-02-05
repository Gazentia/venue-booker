import { Route, Switch, Redirect } from "react-router-dom";
import BookingContainer from "./containers/booking/BookingContainer";
const Router = () => {
  return (
    <Switch>
      <Route path='/bookings/:filter'>
        <BookingContainer />
      </Route>
      <Route path='*'>
        <Redirect to='/bookings/today' />
      </Route>
    </Switch>
  );
};

export default Router;
