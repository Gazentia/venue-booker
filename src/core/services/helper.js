export function sortCommingDate(data) {
  return [...data].sort((a, b) => {
    a = new Date(a.endTime);
    b = new Date(b.endTime);
    if (a.getTime() > b.getTime()) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function fillzero(number) {
  return number < 10 ? "0" + number : number;
}

export function getTimeDate(fullDate) {
  const date = new Date(fullDate);
  return date.getHours() + ":" + fillzero(date.getMinutes());
}

export function getPeriodTime(start, end) {
  return getTimeDate(start) + " - " + getTimeDate(end);
}

export function getFullDay(fullDate) {
  const day = new Date(fullDate).getDay();
  switch (day) {
  }
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "";
  }
}
export function getShortMonth(fullDate) {
  const month = new Date(fullDate).getMonth();
  switch (month) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
    default:
      return "";
  }
}

export function getNameDay(fullDate) {
  const day = new Date(fullDate).getDay();
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "";
  }
}

export function dateDisplay(fullDate) {
  const date = new Date(fullDate);
  return date.getDate() + " " + getShortMonth(date);
}

export function dateCompare(start, end, type = "before") {
  start = new Date(start).getTime();
  end = new Date(end).getTime();
  if (type === "before") {
    return start < end;
  }
  if (type === "after") {
    return start > end;
  }
  if (type === "equal") {
    return start === end;
  }
}
export function getDate(days = 0) {
  const dateResult = new Date();
  dateResult.setHours(0);
  dateResult.setMinutes(0);
  dateResult.setSeconds(0);
  if (days > 0) {
    dateResult.setDate(dateResult.getDate() + days);
  }
  return dateResult;
}

export function getBookingsForPeriod(
  roomId,
  bookingData,
  typeFilter = "today"
) {
  const condDates = [];
  let result = [];
  const typeFilterLists = ["today", "week", "nextweek"];
  const filterSelected = typeFilterLists.find(
    (x) => typeFilter.toLowerCase() === x.toLowerCase()
  );

  if (!filterSelected) {
    console.log("[Error] filter type wasn't correct.");
    return result;
  }

  if (filterSelected === "today") {
    condDates.push(getDate(), getDate(1));
  }

  if (filterSelected === "week") {
    condDates.push(getDate(), getDate(7));
  }

  if (filterSelected === "nextweek") {
    condDates.push(getDate(7), getDate(14));
  }
  result = bookingData.filter((booking) => {
    if (booking.roomId !== roomId || condDates.length < 2) {
      return false;
    }

    if (
      (dateCompare(booking.startTime, condDates[0], "after") ||
        dateCompare(booking.startTime, condDates[0], "equal")) &&
      (dateCompare(booking.startTime, condDates[1], "before") ||
        dateCompare(booking.startTime, condDates[1], "equal"))
    ) {
      return true;
    } else {
      return false;
    }
  });
  return result;
}
