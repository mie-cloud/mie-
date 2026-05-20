import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, ArrowRight, RotateCcw, Trophy, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const quizQuestions = [
  {
    id: 1,
    question: 'Python中用于单行注释的符号是？',
    options: ['//', '#', '/* */', '--'],
    correctAnswer: 1,
    explanation: 'Python中使用#符号进行单行注释。',
    difficulty: '简单'
  },
  {
    id: 2,
    question: 'Python中定义函数的关键字是？',
    options: ['function', 'def', 'func', 'define'],
    correctAnswer: 1,
    explanation: 'Python中使用def关键字定义函数。',
    difficulty: '简单'
  },
  {
    id: 3,
    question: '以下哪个不是Python的基本数据类型？',
    options: ['int', 'float', 'string', 'double'],
    correctAnswer: 3,
    explanation: 'Python中没有double类型，只有float类型表示浮点数。',
    difficulty: '简单'
  },
  {
    id: 4,
    question: 'Pandas中读取CSV文件的函数是？',
    options: ['read_csv()', 'load_csv()', 'import_csv()', 'get_csv()'],
    correctAnswer: 0,
    explanation: 'Pandas中使用read_csv()函数读取CSV文件。',
    difficulty: '中等'
  },
  {
    id: 5,
    question: '在Python中，如何将字符串 "123" 转换为整数？',
    options: ['int("123")', 'str(123)', 'float("123")', 'bool("123")'],
    correctAnswer: 0,
    explanation: '使用int()函数可以将字符串转换为整数。',
    difficulty: '简单'
  }
];

export default function PracticeQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(quizQuestions.length).fill(false));
  const [userAnswers, setUserAnswers] = useState<number[]>(new Array(quizQuestions.length).fill(-1));

  const handleAnswerSelect = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    
    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestion] = true;
    setAnsweredQuestions(newAnsweredQuestions);
    
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(newUserAnswers);
    
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(userAnswers[currentQuestion - 1]);
      setShowResult(answeredQuestions[currentQuestion - 1]);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(quizQuestions.length).fill(false));
    setUserAnswers(new Array(quizQuestions.length).fill(-1));
  };

  const currentQ = quizQuestions[currentQuestion];
  const isAnswered = answeredQuestions[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correctAnswer;

  // 如果所有题目都答完了，显示结果页面
  if (answeredQuestions.every(q => q)) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/practice" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回练习中心
          </Link>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">练习完成！</h1>
            <p className="text-xl text-gray-600 mb-6">
              你答对了 <span className="text-green-600 font-bold">{score}</span> / {quizQuestions.length} 道题
            </p>
            <div className="text-4xl font-bold text-green-600 mb-8">
              {Math.round((score / quizQuestions.length) * 100)}%
            </div>
            <div className="flex justify-center gap-4">
              <button 
                onClick={handleRestart}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                重新练习
              </button>
              <Link 
                to="/practice"
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                返回练习中心
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/practice" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回练习中心
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Python基础练习</h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>题目 {currentQuestion + 1} / {quizQuestions.length}</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">{currentQ.difficulty}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div 
            className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
          ></div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{currentQ.question}</h2>
          
          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={isAnswered}
                className={`w-full p-4 rounded-xl text-left transition-all ${
                  selectedAnswer === index
                    ? isAnswered
                      ? isCorrect
                        ? 'bg-green-100 border-2 border-green-500'
                        : 'bg-red-100 border-2 border-red-500'
                      : 'bg-green-100 border-2 border-green-500'
                    : isAnswered && index === currentQ.correctAnswer
                    ? 'bg-green-100 border-2 border-green-500'
                    : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 font-medium ${
                    selectedAnswer === index
                      ? isAnswered
                        ? isCorrect
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : 'bg-green-500 text-white'
                      : isAnswered && index === currentQ.correctAnswer
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1">{option}</span>
                  {isAnswered && index === currentQ.correctAnswer && (
                    <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
                  )}
                  {isAnswered && selectedAnswer === index && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-600 ml-2" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Explanation */}
          {showResult && (
            <div className={`mt-6 p-4 rounded-xl ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-center gap-2 mb-2">
                {isCorrect ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
                <span className={`font-bold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                  {isCorrect ? '回答正确！' : '回答错误'}
                </span>
              </div>
              <p className="text-gray-700">{currentQ.explanation}</p>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-5 h-5" />
            上一题
          </button>

          {!isAnswered ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              提交答案
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors"
            >
              下一题
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
