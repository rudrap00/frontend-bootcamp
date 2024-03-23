import { createContext, useReducer } from "react";
import { transactionsData } from "../pages/Payments/components/constants";

// Create a context for transactions
export const transactionsContext = createContext();

// Get today's date
let todayDate = new Date();
todayDate = new Date(
  todayDate.getFullYear(),
  todayDate.getMonth(),
  todayDate.getDate()
);

// Initial state for transactions
const initialState = {
  originalData: transactionsData.filter(
    ({ date }) => date.getTime() >= todayDate.getTime()
  ),
  data: transactionsData.filter(
    ({ date }) => date.getTime() >= todayDate.getTime()
  ),
  switch: 0,
  str: "",
  timeWindow: "Today",
};

// Reducer function to handle state changes
const reducer = (state, action) => {
  let searchString = state.str;
  let dateWiseData = state.originalData;
  let timeFrame = state.timeWindow;

  // Handling different action types
  if (action.type === "time") {
    // Update timeFrame based on payload
    timeFrame = action.payload;
    const YEAR = todayDate.getFullYear();
    const MONTH = todayDate.getMonth();
    const DAY = todayDate.getDay();
    const TIME = todayDate.getTime();

    // Filter data based on selected time frame
    if (timeFrame === "All") {
      dateWiseData = transactionsData;
    } else if (timeFrame === "This Year") {
      dateWiseData = transactionsData.filter(
        ({ date }) => date.getFullYear() === YEAR
      );
    } else if (timeFrame === "Last Year") {
      dateWiseData = transactionsData.filter(
        ({ date }) => date.getFullYear() === YEAR - 1
      );
    } else if (timeFrame === "This Month") {
      dateWiseData = transactionsData.filter(
        ({ date }) => date.getFullYear() === YEAR && date.getMonth() === MONTH
      );
    } else if (timeFrame === "Last Month") {
      dateWiseData = transactionsData.filter(
        ({ date }) =>
          date.getFullYear() === YEAR && date.getMonth() === MONTH - 1
      );
    } else if (timeFrame === "This Week") {
      dateWiseData = transactionsData.filter(
        ({ date }) => date.getTime() >= TIME - DAY * 24 * 60 * 60 * 1000
      );
    } else if (timeFrame === "Last Week") {
      dateWiseData = transactionsData.filter(
        ({ date }) =>
          date.getTime() >= TIME - (7 + DAY) * 24 * 60 * 60 * 1000 &&
          date.getTime() < TIME - DAY * 24 * 60 * 60 * 1000
      );
    } else if (timeFrame === "Today") {
      dateWiseData = transactionsData.filter(
        ({ date }) => date.getTime() >= TIME
      );
    } else if (timeFrame === "Yesterday") {
      dateWiseData = transactionsData.filter(
        ({ date }) =>
          date.getTime() >= TIME - 24 * 60 * 60 * 1000 && date.getTime() < TIME
      );
    }
  } else if (action.type === "sort") {
    // Toggle between sorting options
    const switchVal = (state.switch + 1) % 3;

    // Sort data based on switch value
    if (switchVal === 0) {
      return {
        ...state,
        switch: switchVal,
      };
    } else if (switchVal === 1) {
      return {
        ...state,
        switch: switchVal,
        data: state.data.sort((a, b) => a.id - b.id),
      };
    } else {
      return {
        ...state,
        switch: switchVal,
        data: state.data.sort((a, b) => b.id - a.id),
      };
    }
  } else if (action.type === "search") {
    // Update search string
    searchString = action.payload;
  }

  // Filter data based on search string
  const filteredData = dateWiseData.filter((item) =>
    item.id.startsWith(searchString)
  );

  // Return updated state based on switch value
  if (state.switch === 0) {
    return {
      ...state,
      data: filteredData,
      originalData: dateWiseData,
      str: searchString,
      timeWindow: timeFrame,
    };
  } else if (state.switch === 1) {
    return {
      ...state,
      data: filteredData.sort((a, b) => a.id - b.id),
      originalData: dateWiseData,
      str: searchString,
      timeWindow: timeFrame,
    };
  } else {
    return {
      ...state,
      data: filteredData.sort((a, b) => b.id - a.id),
      originalData: dateWiseData,
      str: searchString,
      timeWindow: timeFrame,
    };
  }
};

// Context provider component
const TransactionsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Provide state and dispatch function to children components
  return (
    <transactionsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </transactionsContext.Provider>
  );
};

export default TransactionsContextProvider;
