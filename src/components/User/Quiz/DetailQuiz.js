import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../../API/services/quiz.service";

const DetailQuiz = (props) => {
  const params = new useParams();
  const id = params.id;

  const fetchQuestion = async () => {
    const data = await getDataQuiz(id);
    console.log(">>>>check data", data);
  };

  useEffect(() => {
    fetchQuestion();
  }, [id]);
  return (
    <div className="detail-quiz-container">
      <div>dasdasdsadasdsa</div>
    </div>
  );
};

export default DetailQuiz;
