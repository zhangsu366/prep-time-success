
import React, { useState } from 'react';
import { Clock, CheckCircle, XCircle, RotateCcw, BookOpen } from 'lucide-react';

const Practice = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes for demo

  const questions = [
    {
      id: 1,
      type: 'Math',
      question: 'If 3x + 5 = 14, what is the value of x?',
      options: ['A) 2', 'B) 3', 'C) 4', 'D) 5'],
      correct: 'B) 3',
      explanation: 'Solve for x: 3x + 5 = 14, so 3x = 9, therefore x = 3.'
    },
    {
      id: 2,
      type: 'Reading',
      question: 'Based on the passage context, the word "meticulous" most nearly means:',
      options: ['A) Careless', 'B) Detailed', 'C) Quick', 'D) Simple'],
      correct: 'B) Detailed',
      explanation: 'Meticulous means showing great attention to detail; very careful and precise.'
    },
    {
      id: 3,
      type: 'Math',
      question: 'What is the area of a circle with radius 4?',
      options: ['A) 8π', 'B) 12π', 'C) 16π', 'D) 20π'],
      correct: 'C) 16π',
      explanation: 'Area = πr² = π(4)² = 16π'
    },
    {
      id: 4,
      type: 'Writing',
      question: 'Which sentence is grammatically correct?',
      options: [
        'A) Neither the students nor the teacher were ready.',
        'B) Neither the students nor the teacher was ready.',
        'C) Neither the student nor the teachers were ready.',
        'D) Neither the student nor the teachers was ready.'
      ],
      correct: 'B) Neither the students nor the teacher was ready.',
      explanation: 'With "neither...nor," the verb agrees with the subject closest to it (teacher = singular).'
    },
    {
      id: 5,
      type: 'Math',
      question: 'If f(x) = 2x² - 3x + 1, what is f(2)?',
      options: ['A) 3', 'B) 5', 'C) 7', 'D) 9'],
      correct: 'A) 3',
      explanation: 'f(2) = 2(2)² - 3(2) + 1 = 8 - 6 + 1 = 3'
    }
  ];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setShowResult(false);
    } else {
      // Test completed
      alert(`Test completed! Your score: ${score + (selectedAnswer === questions[currentQuestion].correct ? 1 : 0)}/${questions.length}`);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setShowResult(false);
    setScore(0);
    setTimeLeft(300);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">SAT Practice Test</h1>
            <button
              onClick={handleRestart}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Restart</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">Time: {formatTime(timeLeft)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">Question: {currentQuestion + 1}/{questions.length}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-purple-600" />
              <span className="text-gray-700">Score: {score}/{questions.length}</span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {currentQ.type}
              </span>
              <span className="text-gray-500">Question {currentQuestion + 1}</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 leading-relaxed">
              {currentQ.question}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-3 mb-8">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                  selectedAnswer === option
                    ? showResult
                      ? option === currentQ.correct
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : 'border-red-500 bg-red-50 text-red-800'
                      : 'border-blue-500 bg-blue-50 text-blue-800'
                    : showResult && option === currentQ.correct
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : 'border-gray-300 hover:border-gray-400 text-gray-700'
                } ${showResult ? 'cursor-not-allowed' : 'hover:bg-gray-50 cursor-pointer'}`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && option === currentQ.correct && (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                  {showResult && selectedAnswer === option && option !== currentQ.correct && (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Result and Explanation */}
          {showResult && (
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-2 mb-3">
                {selectedAnswer === currentQ.correct ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-800">Correct!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 text-red-600" />
                    <span className="font-semibold text-red-800">Incorrect</span>
                  </>
                )}
              </div>
              <p className="text-gray-700">
                <strong>Explanation:</strong> {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between">
            <div className="text-sm text-gray-500">
              {currentQuestion + 1} of {questions.length} questions
            </div>
            <div className="space-x-4">
              {!showResult ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswer}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Test'}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">SAT Practice Tips</h3>
          <ul className="space-y-2 text-blue-800">
            <li>• Read each question carefully and identify what it's asking</li>
            <li>• Eliminate obviously wrong answers first</li>
            <li>• Don't spend too much time on any single question</li>
            <li>• Use the process of elimination for difficult questions</li>
            <li>• Review your answers if time permits</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Practice;
