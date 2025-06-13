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
      question: 'If f(x) = x³ - 4x² + 6x - 24 and f(4) = 0, what are all the zeros of f(x)?',
      options: ['A) 4, 2i√6, -2i√6', 'B) 4, 2√6, -2√6', 'C) 4, 2i, -2i', 'D) 4, 6, -6'],
      correct: 'A) 4, 2i√6, -2i√6',
      explanation: 'Since f(4) = 0, (x-4) is a factor. Using polynomial division: f(x) = (x-4)(x² + 24). Setting x² + 24 = 0 gives x = ±2i√6.'
    },
    {
      id: 2,
      type: 'Reading',
      question: 'In the context of a literary analysis comparing modernist and postmodernist narratives, the author\'s use of "palimpsest" most nearly means:',
      options: ['A) A chronological sequence', 'B) Layered, overwritten meanings', 'C) A clear, direct statement', 'D) An outdated technique'],
      correct: 'B) Layered, overwritten meanings',
      explanation: 'A palimpsest refers to a manuscript with layers of text, where earlier writing shows through. In literary analysis, it suggests multiple overlapping meanings and interpretations.'
    },
    {
      id: 3,
      type: 'Math',
      question: 'In triangle ABC, if sin(A) = 3/5, sin(B) = 4/5, and the area of the triangle is 24, what is the length of side c?',
      options: ['A) 10', 'B) 12', 'C) 15', 'D) 20'],
      correct: 'A) 10',
      explanation: 'Since sin(A) = 3/5 and sin(B) = 4/5, we have cos(A) = 4/5 and cos(B) = 3/5. Using sin(C) = sin(180° - A - B) = sin(A + B) = sin(A)cos(B) + cos(A)sin(B) = (3/5)(3/5) + (4/5)(4/5) = 1. So C = 90°. Area = (1/2)ab·sin(C) = (1/2)ab = 24, so ab = 48. Using Law of Sines: a/sin(A) = b/sin(B) gives a = 3k, b = 4k for some k. So 12k² = 48, k = 2. Thus a = 6, b = 8, and c = √(36 + 64) = 10.'
    },
    {
      id: 4,
      type: 'Writing',
      question: 'Which revision best improves the coherence and sophistication of this passage: "The researchers conducted experiments. The experiments were about memory. They found interesting results about how people remember things differently under stress."',
      options: [
        'A) The researchers conducted memory experiments and found that people remember things differently under stress.',
        'B) Researchers conducted experiments about memory, finding interesting results about how people remember things differently under stress.',
        'C) The researchers\' memory experiments revealed significant variations in cognitive recall patterns under stress-induced conditions.',
        'D) Memory experiments were conducted by researchers who found that stress affects how people remember.'
      ],
      correct: 'C) The researchers\' memory experiments revealed significant variations in cognitive recall patterns under stress-induced conditions.',
      explanation: 'Option C demonstrates the highest level of sophistication through precise terminology ("cognitive recall patterns," "stress-induced conditions") and eliminates redundancy while maintaining clarity and academic tone.'
    },
    {
      id: 5,
      type: 'Math',
      question: 'If log₂(x) + log₄(x) + log₈(x) = 11, what is the value of x?',
      options: ['A) 16', 'B) 32', 'C) 64', 'D) 128'],
      correct: 'C) 64',
      explanation: 'Convert to common base: log₂(x) + log₂(x)/2 + log₂(x)/3 = 11. This gives log₂(x)(1 + 1/2 + 1/3) = log₂(x)(11/6) = 11. Therefore log₂(x) = 6, so x = 2⁶ = 64.'
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
