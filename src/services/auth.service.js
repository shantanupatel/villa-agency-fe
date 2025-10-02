import axios from "axios";

export const login = (values) => {
  const { username, password } = values;

  return axios
    .post(process.env.REACT_APP_API_URL + "/auth/signin", {
      username: username,
      password: password,
    })
    .then((response) => {
      if (response.data.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }

      return response;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
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
