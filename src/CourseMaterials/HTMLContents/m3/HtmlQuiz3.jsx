import { useState } from "react";
import "../../../styles/quizStyle.css";
import HtmlSidebar from "../HtmlSidebar";

const questions = [
    {
      question: "Which attribute is used to specify the URL in a hyperlink?",
      options: ["src", "href", "link", "url"],
      correct: 1,
    },
    {
      question: "Which HTML tag is used to embed an image?",
      options: ["<img>", "<image>", "<pic>", "<src>"],
      correct: 0,
    },
    {
      question: "Which HTML tag is used to create a form?",
      options: ["<form>", "<input>", "<fieldset>", "<submit>"],
      correct: 0,
    },
    {
      question: "Which of the following is a semantic tag?",
      options: ["<div>", "<span>", "<section>", "<b>"],
      correct: 2,
    },
    {
      question: "Which input type is used for password fields in an HTML form?",
      options: ["text", "password", "secure", "hidden"],
      correct: 1,
    },
  ];
  

export default function HtmlQuiz3() {
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
        <HtmlSidebar/>
      </div>
    <div className="quiz-container">
      <h1>Assignment 3</h1>
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
