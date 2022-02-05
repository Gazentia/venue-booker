import { configureStore } from "@reduxjs/toolkit";

import bookingSlice from "./booking/booking-slice";
import errorSlice from "./error/error-slice";

const store = configureStore({
    reducer: {
        error: errorSlice.reducer,
        booking: bookingSlice.reducer
    }
});

export default store;