const setData = (name, value) => {
  localStorage.setItem(name, value);
};

const getData = (name) => {
  return localStorage.getItem(name);
};

export { setData, getData };
