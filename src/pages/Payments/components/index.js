import Overview from "./Overview/Overview";
import Transactions from "./Transactions/Transactions";
import TransactionsHeader from "./TransactionsHeader/TransactionsHeader";
import { transactionsData } from "./constants";

export const initialState = {
  originalData: transactionsData,
  data: transactionsData,
  switch: 0,
  search: "",
};

export const reducer = (state, action) => {
  let searchString = state.search;
  let switchVal = state.switch;
  if (action.type === "sort") {
    switchVal = (switchVal + 1) % 3;
  } else if (action.type === "search") {
    searchString = action.payload;
  }

  const filteredData = state.originalData.filter((item) =>
    item.id.startsWith(searchString)
  );

  if (switchVal === 0) {
    return {
      ...state,
      data: filteredData,
      switch: switchVal,
      search: searchString,
    };
  } else if (switchVal === 1) {
    return {
      ...state,
      data: filteredData.sort((a, b) => a.id - b.id),
      switch: switchVal,
      search: searchString,
    };
  } else {
    return {
      ...state,
      data: filteredData.sort((a, b) => b.id - a.id),
      switch: switchVal,
      search: searchString,
    };
  }
};

export { Overview, Transactions, TransactionsHeader };
