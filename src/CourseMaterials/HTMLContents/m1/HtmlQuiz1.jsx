import { useState } from "react";
import "../../../styles/quizStyle.css";
import HtmlSidebar from "../HtmlSidebar";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Transfer Markup Language",
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 1,
  },
  {
    question: "Which of the following is NOT a commonly used HTML editor?",
    options: ["Notepad++", "Visual Studio Code", "Adobe Photoshop", "Sublime Text"],
    correct: 2,
  },
  {
    question: "Which tag is used to define the basic structure of an HTML document?",
    options: ["<body>", "<html>", "<head>", "<title>"],
    correct: 1,
  },
  {
    question: "Which section of an HTML document contains metadata?",
    options: ["<body>", "<title>", "<head>", "<html>"],
    correct: 2,
  },
  {
    question: "What is the default file extension for an HTML document?",
    options: [".htm", ".html", "Both A and B", ".xml"],
    correct: 2,
  },
];

export default function HtmlQuiz1() {
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
      <h1>Assignment 1</h1>
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
