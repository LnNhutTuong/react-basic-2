import { data } from "react-router-dom";
import axios from "../axiosCustomize";

const getQuizByUsers = () => {
  return axios.get(`/api/v1/quiz-by-participant`);
};

export { getQuizByUsers };
