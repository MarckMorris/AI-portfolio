import axios from "axios";

export const pingAssortment = async () => {
  return axios.get("http://retail_assortment:8000/ping");
};
