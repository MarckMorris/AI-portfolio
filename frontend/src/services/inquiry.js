import axios from "axios";

export const pingInquiry = async () => {
  return axios.get("http://retail_inquiry:8000/ping");
};
