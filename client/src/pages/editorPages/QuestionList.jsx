import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function QuestionList() {
  const params = useParams();
  const { langId } = params;

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3500/api/questions/lang/${langId}`)
      .then((res) => setQuestions(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>{langId} Question </h2>
      <div className="question-list">
        {questions.map((ques, i) => (
          <QuestionItem question={ques} key={ques._id} index={i + 1} />
        ))}
      </div>
    </>
  );
}

const QuestionItem = ({ question, index }) => {
  return (
    <div className="questionItem">
      <h5>{`Q.${index} ${question.question}`}</h5>
      <ul className="option-list">
        {question.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
