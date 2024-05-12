import { dateMap } from "./constants";

const fromDate = () => {
  return formatDate(new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000));
};

const toDate = () => {
  return formatDate(new Date());
};

const formatDate = (date) => {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return `${yyyy}-${mm}-${dd}`;
};

const formatSearchResultDate = (origDate) => {
  const dateArr = origDate.split("T")[0].split("-");
  const year = dateArr[0];
  const month = dateMap[dateArr[1]];
  const day = dateArr[2].startsWith("0") ? dateArr[2][1] : dateArr[2];
  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
};

export { fromDate, toDate, formatSearchResultDate };
