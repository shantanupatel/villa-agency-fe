import axios from "axios";
import { localStorageGetItem, localStorageSaveItem } from "Utils";

export const login = (values) => {
  const { username, password } = values;

  return axios
    .post(process.env.REACT_APP_API_URL + "/auth/signin", {
      username: username,
      password: password,
    })
    .then((response) => {
      if (response.data.data.accessToken) {
        localStorageSaveItem("user", response.data.data);
      }

      return response;
    });
};

export const logout = async () => {
  const token = localStorageGetItem("user");
  const refreshToken = token.refreshToken;

  return await axios.post(process.env.REACT_APP_API_URL + "/auth/logout", {'token': refreshToken}).then((response) => response);
};

export const register = (values) => {
  const { username, email, password, role } = values;

  return axios
    .post(process.env.REACT_APP_API_URL + "/auth/signup", {
      username: username,
      password: password,
      email: email,
      role: role,
    })
    .then((response) => {
      return response;
    });
};

export const getCurrentUser = () => {
  // console.log("user data: ", JSON.parse(localStorage.getItem("user")));
  return JSON.parse(localStorage.getItem("user"));
};
