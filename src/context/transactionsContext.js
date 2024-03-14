import { createContext, useReducer } from "react";
import { transactionsData } from "../pages/Payments/components/constants";

export const transactionsContext = createContext();

const initialState = {
  originalData: transactionsData,
  data: transactionsData,
  switch: 0,
};

const reducer = (state, action) => {
  let searchString;

  if (action.type === "sort") {
    const switchVal = (state.switch + 1) % 3;

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
    searchString = action.payload;
  }

  const filteredData = state.originalData.filter((item) =>
    item.id.startsWith(searchString)
  );

  if (state.switch === 0) {
    return {
      ...state,
      data: filteredData,
      search: searchString,
    };
  } else if (state.switch === 1) {
    return {
      ...state,
      data: filteredData.sort((a, b) => a.id - b.id),
      search: searchString,
    };
  } else {
    return {
      ...state,
      data: filteredData.sort((a, b) => b.id - a.id),
      search: searchString,
    };
  }
};

const TransactionsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <transactionsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </transactionsContext.Provider>
  );
};

export default TransactionsContextProvider;
