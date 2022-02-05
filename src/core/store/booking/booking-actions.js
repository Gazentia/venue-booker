import { bookingActions } from "./booking-slice";
import { errorActions } from "../error/error-slice";

import { getBooking } from "core/services/api";
export const fetchBooking = (roomId = "", filter = "today") => {
  return async (dispatch) => {
    try {
      const fetchData = await getBooking(roomId, filter);

      dispatch(
        bookingActions.replaceBooking({
          events: fetchData || [],
          roomId: roomId || "Unknown",
        })
      );
    } catch (err) {
      dispatch(
        errorActions.showError({
          errorTitle: "Error Occurred",
          errorMessage: err.message,
        })
      );
    }
  };
};
