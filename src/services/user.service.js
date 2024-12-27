import axios from "axios";
import { authHeader } from "services/auth-header";

export function getPublicContent() {
  return axios.get(process.env.REACT_APP_API_URL + "/all");
}

export function getUserBoard() {
  return axios.get(process.env.REACT_APP_API_URL + "/user", {
    headers: authHeader(),
  });
}

export function getModeratorBoard() {
  return axios.get(process.env.REACT_APP_API_URL + "/mod", {
    headers: authHeader(),
  });
}

export function getAdminBoard() {
  return axios.get(process.env.REACT_APP_API_URL + "/admin", {
    headers: authHeader(),
  });
}
