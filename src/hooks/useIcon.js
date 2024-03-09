export const useIcon = (route) => {
  let icon = "";

  if (route === "Products") {
    icon = "qr_code";
  } else if (route === "Delivery") {
    icon = "local_shipping";
  } else if (route === "Tools") {
    icon = "build";
  } else if (route === "Discounts") {
    icon = "percent";
  } else if (route === "Audience") {
    icon = "group";
  } else if (route === "Appearance") {
    icon = "palette";
  } else if (route === "Plugins") {
    icon = "electric_bolt";
  } else {
    icon = route;
  }

  return icon;
};
