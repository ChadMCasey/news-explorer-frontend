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

export { fromDate, toDate };
