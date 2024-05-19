const JWT_KEY = "JWT";

const getToken = () => {
  return localStorage.getItem(JWT_KEY);
};

const setToken = (token) => {
  localStorage.setItem(JWT_KEY, token);
};

const removeToken = () => {
  return localStorage.removeItem(JWT_KEY);
};

export { getToken, setToken, removeToken };
