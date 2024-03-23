// Custom hook to format date
export const useFormatDate = (date) => {
  // Array of month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Extract day, month, and year from the provided date
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Return formatted date
  return { day, month, year };
};
