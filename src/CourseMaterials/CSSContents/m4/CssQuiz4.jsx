import { useState } from "react";
import "../../../styles/quizStyle.css";
import CssSidebar from "../CssSidebar";

const questions = [
    {
      question: "Which CSS layout system is designed for one-dimensional layouts?",
      options: ["Grid", "Flexbox", "Float", "Positioning"],
      correct: 1,
    },
    {
      question: "Which property is used to define a flex container?",
      options: ["display: block", "display: grid", "display: flex", "display: inline-flex"],
      correct: 2,
    },
    {
      question: "Which property is used to define the direction of items in a Flexbox container?",
      options: ["align-items", "justify-content", "flex-wrap", "flex-direction"],
      correct: 3,
    },
    {
      question: "Which CSS layout system is designed for two-dimensional layouts?",
      options: ["Flexbox", "Float", "Grid", "Positioning"],
      correct: 2,
    },
    {
      question: "Which property defines the number of columns in a CSS Grid?",
      options: ["grid-template-rows", "grid-template-columns", "column-count", "grid-gap"],
      correct: 1,
    },
  ];
    
export default function CssQuiz4() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);

  const handleSelect = (qIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (answers.includes(null)) {
      alert("Please answer all questions before submitting.");
      return;
    }
    
    const correctAnswers = answers.filter((answer, index) => answer === questions[index].correct).length;
    const percentage = (correctAnswers / questions.length) * 100;
    setScore(percentage);
    setShow(true);
  };

  return (
    <>
      <div className="bar">
        <CssSidebar/>
      </div>
    <div className="quiz-container">
      <h1>Assignment 4</h1>
      {questions.map((q, qIndex) => (
        <div className="question-card" key={qIndex}>
          <h3>{q.question}</h3>
          {q.options.map((option, oIndex) => (
            <label key={oIndex} className="option">
              <input
                type="radio"
                name={`question-${qIndex}`}
                value={oIndex}
                checked={answers[qIndex] === oIndex}
                onChange={() => handleSelect(qIndex, oIndex)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <div className="submit-container">
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
      {show && (
        <div className="result-modal" style={{ backgroundColor: score >= 75 ? "rgba(0, 255, 0, 0.5)" : "rgba(255, 0, 0, 0.41)" }}>
          <h2 className={score >= 75 ? "result-success" : "result-fail"}>
            {score >= 75 ? `Passed! Score: ${score.toFixed(2)}%` : `Try Again! Score: ${score.toFixed(2)}%`}
          </h2>
          <button className="close-button" onClick={() => setShow(false)}>Close</button>
        </div>
      )}
    </div>
    </>
  );
}
