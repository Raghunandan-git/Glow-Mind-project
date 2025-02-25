import { useState } from "react";
import "../../../styles/quizStyle.css";
import HtmlSidebar from "../HtmlSidebar";

const questions = [
    {
      question: "Which of the following is a container element in HTML?",
      options: ["<img>", "<p>", "<br>", "<hr>"],
      correct: 1,
    },
    {
      question: "Which container element is used to group multiple elements together?",
      options: ["<section>", "<span>", "<div>", "<article>"],
      correct: 2,
    },
    {
      question: "What does DOM stand for?",
      options: [
        "Document Object Model",
        "Data Object Management",
        "Digital Output Mode",
        "Document Order Method",
      ],
      correct: 0,
    },
    {
      question: "Which property is used to access an HTML element by its ID in JavaScript?",
      options: ["getElementByClass", "querySelector", "getElementById", "getElementsByTagName"],
      correct: 2,
    },
    {
      question: "Which method is used to dynamically change the content of an HTML element?",
      options: ["innerHTML", "setAttribute", "updateText", "modify()"],
      correct: 0,
    },
  ];
  
  

export default function HtmlQuiz4() {
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
