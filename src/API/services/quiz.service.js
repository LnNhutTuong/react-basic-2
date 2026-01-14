import { data } from "react-router-dom";
import axios from "../axiosCustomize";

const getQuizByUsers = () => {
  return axios.get(`/api/v1/quiz-by-participant`);
};

const getDataQuiz = (id) => {
  return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`);
};
export { getQuizByUsers, getDataQuiz };
