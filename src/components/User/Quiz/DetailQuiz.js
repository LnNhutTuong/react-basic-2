import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../../API/services/quiz.service";
import _ from "lodash";
const DetailQuiz = (props) => {
  const params = new useParams();
  const id = params.id;

  const fetchQuestion = async () => {
    const res = await getDataQuiz(id);

    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(raw)
        // Group the elements of Array based on `id` property
        .groupBy("id")
        // `key` is group's name (id), `value` is the array of objects
        .map((value, key) => {
          let answer = [];
          let questionDescription,
            image = null;
          value.forEach((item, index) => {
            if (index === 0) {
              questionDescription = item.answers.dedescription;
              image = item.answers.image;
            }
            answer.push(item.answers);
          });

          return { id: key, answer, questionDescription, image };
        })
        .value();
    }
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
