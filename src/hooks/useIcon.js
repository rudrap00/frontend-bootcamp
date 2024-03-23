import {
  Analytics,
  Appearance,
  Audience,
  Delivery,
  Discounts,
  Home,
  Marketing,
  Orders,
  Payments,
  Plugins,
  Products,
  Tools,
} from "../assets";

// Custom hook to retrieve icon based on route
export const useIcon = (route) => {
  // Determine which icon to return based on route
  if (route === "Home") {
    return Home;
  } else if (route === "Orders") {
    return Orders;
  } else if (route === "Products") {
    return Products;
  } else if (route === "Delivery") {
    return Delivery;
  } else if (route === "Marketing") {
    return Marketing;
  } else if (route === "Analytics") {
    return Analytics;
  } else if (route === "Payments") {
    return Payments;
  } else if (route === "Tools") {
    return Tools;
  } else if (route === "Discounts") {
    return Discounts;
  } else if (route === "Audience") {
    return Audience;
  } else if (route === "Appearance") {
    return Appearance;
  } else {
    return Plugins;
  }
};
