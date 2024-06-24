"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

// Define the quiz questions and answers
const questions = [
  {
    id: 1,
    question: "Who is this hero?",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Jose_Rizal_full.jpg/330px-Jose_Rizal_full.jpg",
    options: [
      "Jose Rizal",
      "Andrés Bonifacio",
      "Emilio Aguinaldo",
      "Apolinario Mabini",
    ],
    correctAnswer: "Jose Rizal",
  },
  {
    id: 2,
    question: "Who is this hero?",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Andr%C3%A9s_Bonifacio_%28cropped%29.jpg",
    options: [
      "Jose Rizal",
      "Andrés Bonifacio",
      "Emilio Aguinaldo",
      "Apolinario Mabini",
    ],
    correctAnswer: "Andrés Bonifacio",
  },
  {
    id: 3,
    question: "In what year did Jose Rizal die?",
    options: ["1887", "1891", "1896", "1897"],
    correctAnswer: "1896",
  },
  {
    id: 4,
    question: "Who is the father of the Philippine Revolution?",
    options: [
      "Jose Rizal",
      "Andrés Bonifacio",
      "Emilio Aguinaldo",
      "Apolinario Mabini",
    ],
    correctAnswer: "Andrés Bonifacio",
  },
  {
    id: 5,
    question: "What does KKK stand for?",
    options: [
      "Kataas-taasan, Kagalang-galangang Katipunan",
      "Katipunan ng mga Anak ng Bayan",
      "Kalbo, kinis,kintab",
      "Katipunan ng mga Kabataan",
    ],
    correctAnswer: "Kataas-taasan, Kagalang-galangang Katipunan",
  },
  {
    id: 6,
    question: "Name an example of a literary work by Jose Rizal.",
    options: [
      "Noli Me Tangere",
      "Florante at Laura",
      "El Filibusterismo",
      "Doctrina Christiana",
    ],
    correctAnswer: "Noli Me Tangere", // Accept either "Noli Me Tangere" or "El Filibusterismo"
    alternateCorrectAnswer: "El Filibusterismo",
  },
  {
    id: 7,
    question:
      "A person who is admired or idealized for courage, outstanding achievements, or noble qualities is called a:",
    options: ["Politician", "Hero", "Scholar", "Artist"],
    correctAnswer: "Hero",
  },

  {
    id: 8,
    question: "When was the KKK founded?",
    options: ["1890", "1892", "1895", "1896"],
    correctAnswer: "1892",
  },
];

const QuizGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.id === 6) {
      if (
        selectedOption === currentQuestion.correctAnswer ||
        selectedOption === currentQuestion.alternateCorrectAnswer
      ) {
        setResult("Correct!");
      } else {
        setResult("Wrong! Try again.");
      }
    } else if (selectedOption === currentQuestion.correctAnswer) {
      setResult("Correct!");
    } else {
      setResult("Wrong! Try again.");
    }
  };

  const handleNext = () => {
    setResult("");
    setSelectedOption("");
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-8 animate-pulse text-center">
        HAMPANG HAMPANG AHH
      </h1>
      <div className="w-full max-w-xl bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        {currentQuestion.imageUrl && (
          <div className="flex justify-center mb-6">
            <Image
              src={currentQuestion.imageUrl}
              width={300}
              height={300}
              className="rounded-lg"
              alt={currentQuestion.question}
            />
          </div>
        )}
        <p className="mb-4 text-lg">{currentQuestion.question}</p>
        <form onSubmit={handleSubmit} className="mb-4">
          {currentQuestion.options.map((option) => (
            <div key={option} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">{option}</span>
              </label>
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg w-full mt-4"
          >
            Submit
          </button>
        </form>
        {result && <p className="mb-4 text-xl font-bold">{result}</p>}
        <button
          onClick={handleNext}
          className="bg-green-500 text-white p-2 rounded-lg w-full"
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default QuizGame;
