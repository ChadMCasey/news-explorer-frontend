const getToken = () => {
  return localStorage.getItem("JWT");
};

const setToken = (token) => {
  localStorage.setItem("JWT", token);
};

const removeToken = () => {
  return localStorage.removeItem(JWT_KEY);
};

export { getToken, setToken, removeToken };
