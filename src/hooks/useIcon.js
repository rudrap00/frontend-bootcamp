import {
  Analytics,
  Appearance,
  Audience,
  Delivery,
  Discounts,
  Home,
  Orders,
  Payments,
  Plugins,
  Products,
  Tools,
} from "../assets";

export const useIcon = (route) => {
  if (route === "Home") {
    return Home;
  } else if (route === "Orders") {
    return Orders;
  } else if (route === "Products") {
    return Products;
  } else if (route === "Delivery") {
    return Delivery;
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
