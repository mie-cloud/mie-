import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { ArrowLeft, ChevronDown, ChevronUp, BookOpen, Book, BarChart3, FileText, CheckCircle, XCircle, Code, ListChecks, Clock, Award, Target, Users } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === id);
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({});
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, { selectedAnswer: number | null; showResult: boolean }>>({});

  const toggleChapter = (chapter: string) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapter]: !prev[chapter]
    }));
  };

  const getExerciseKey = (chapterId: string, exerciseIdx: number) => `${chapterId}-${exerciseIdx}`;

  const handleSelectAnswer = (chapterId: string, exerciseIdx: number, answerIdx: number) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    setExerciseAnswers(prev => ({
      ...prev,
      [key]: { selectedAnswer: answerIdx, showResult: prev[key]?.showResult || false }
    }));
  };

  const handleSubmitAnswer = (chapterId: string, exerciseIdx: number) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    const current = exerciseAnswers[key];
    if (current?.selectedAnswer !== null) {
      setExerciseAnswers(prev => ({
        ...prev,
        [key]: { ...current, showResult: true }
      }));
    }
  };

  const resetAnswer = (chapterId: string, exerciseIdx: number) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    setExerciseAnswers(prev => ({
      ...prev,
      [key]: { selectedAnswer: null, showResult: false }
    }));
  };

  const getExerciseState = (chapterId: string, exerciseIdx: number) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    return exerciseAnswers[key] || { selectedAnswer: null, showResult: false };
  };

  if (!course) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">课程未找到</h1>
            <Link to="/" className="text-green-600 hover:text-green-800 font-medium">
              返回首页
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Course Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-green-400 hover:text-green-300 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">返回首页</span>
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-6">
                  {course.icon}
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">{course.title}</h1>
                  <p className="text-gray-300 text-lg">{course.shortDesc}</p>
                </div>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">{course.description}</p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-green-400" />
                  <span>20小时课程</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-400" />
                  <span>1,234 学习者</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-green-400" />
                  <span>完成证书</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-2xl">
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all mb-4">
                开始学习
              </button>
              <button className="w-full border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                加入收藏
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 相关技能 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ListChecks className="w-6 h-6 mr-2 text-green-600" />
                技能标签
              </h2>
              <div className="flex flex-wrap gap-3">
                {course.skills.map((skill, index) => (
                  <span key={index} className="px-5 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 课程目标 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="w-6 h-6 mr-2 text-green-600" />
                课程目标
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start bg-green-50 p-4 rounded-xl">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 课程大纲 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Book className="w-6 h-6 mr-2 text-green-600" />
                课程大纲
              </h2>
              
              <div className="space-y-4">
                {course.chapters.map((chapter, index) => (
                  <div key={chapter.id} className="border border-gray-200 rounded-xl overflow-hidden">
                    <div 
                      className="flex justify-between items-center p-5 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => toggleChapter(chapter.id)}
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                          {index + 1}
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg">{chapter.title}</h4>
                      </div>
                      {expandedChapters[chapter.id] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                    <div className="p-5">
                      <ul className="pl-0 space-y-2 text-gray-600 mb-4">
                        {chapter.content.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      {expandedChapters[chapter.id] && (
                        <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                          <h5 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                            <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                            练习题 📝 （选择答案后点击"提交答案"按钮）
                          </h5>
                          <ol className="pl-6 space-y-6 text-gray-700">
                            {chapter.exercises.map((exercise, idx) => {
                              const exerciseState = getExerciseState(chapter.id, idx);
                              return (
                                <div key={idx} className="bg-white p-4 rounded-lg border border-gray-100">
                                  <p className="font-semibold mb-3 text-gray-900">{exercise.question}</p>
                                  {exercise.type === 'multiple-choice' && exercise.options && (
                                    <div className="pl-2 space-y-2">
                                      {exercise.options.map((option, optIdx) => {
                                        const isCorrect = option === exercise.correctAnswer;
                                        const isSelected = exerciseState.selectedAnswer === optIdx;
                                        const showResult = exerciseState.showResult;
                                        
                                        let optionClass = 'border-gray-200 hover:border-green-400 hover:bg-green-50';
                                        if (showResult) {
                                          if (isCorrect) {
                                            optionClass = 'border-green-600 bg-green-100 shadow-md';
                                          } else if (isSelected && !isCorrect) {
                                            optionClass = 'border-red-600 bg-red-100 shadow-md';
                                          } else {
                                            optionClass = 'border-gray-200 opacity-50';
                                          }
                                        } else if (isSelected) {
                                          optionClass = 'border-green-500 bg-green-50 shadow-sm';
                                        }
                                        
                                        return (
                                          <div key={optIdx} className={`flex items-center p-4 rounded-xl border-2 ${optionClass} cursor-pointer transition-all duration-200`}
                                            onClick={() => !showResult && handleSelectAnswer(chapter.id, idx, optIdx)}>
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0 ${
                                              showResult && isCorrect ? 'bg-green-600 border-green-600' :
                                              showResult && isSelected && !isCorrect ? 'bg-red-600 border-red-600' :
                                              isSelected ? 'bg-green-600 border-green-600' :
                                              'border-gray-400 hover:border-green-500'
                                            }`}>
                                              {(showResult && isCorrect) || isSelected ? (
                                                <CheckCircle className="w-4 h-4 text-white" />
                                              ) : showResult && isSelected && !isCorrect ? (
                                                <XCircle className="w-4 h-4 text-white" />
                                              ) : null}
                                            </div>
                                            <span className={`text-lg ${
                                              showResult && isCorrect ? 'text-green-800 font-bold' :
                                              showResult && isSelected && !isCorrect ? 'text-red-800 font-medium line-through' :
                                              showResult ? 'text-gray-500' :
                                              'text-gray-800'
                                            }`}>
                                              {option}
                                            </span>
                                            {showResult && isCorrect && (
                                              <span className="ml-auto text-green-700 font-bold text-base">✅ 正确答案</span>
                                            )}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  )}
                                  {exercise.type === 'code' && exercise.codeTemplate && (
                                    <div className="mt-3">
                                      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                                        <code>{exercise.codeTemplate}</code>
                                      </pre>
                                    </div>
                                  )}
                                  {exercise.type === 'multiple-choice' && (
                                    <div className="mt-4 flex items-center justify-between">
                                      {!exerciseState.showResult ? (
                                        <button 
                                          onClick={() => handleSubmitAnswer(chapter.id, idx)}
                                          className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-xl font-bold hover:shadow-lg hover:from-green-700 hover:to-emerald-800 transition-all text-lg"
                                        >
                                          ✓ 提交答案
                                        </button>
                                      ) : (
                                        <>
                                          {exercise.options && exercise.options[exerciseState.selectedAnswer] === exercise.correctAnswer ? (
                                            <div className="flex items-center text-green-600">
                                              <CheckCircle className="w-5 h-5 mr-2" />
                                              <span className="font-medium">回答正确！</span>
                                            </div>
                                          ) : (
                                            <div className="flex items-center text-red-600">
                                              <XCircle className="w-5 h-5 mr-2" />
                                              <span className="font-medium">回答错误</span>
                                            </div>
                                          )}
                                          <button 
                                            onClick={() => resetAnswer(chapter.id, idx)}
                                            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl font-bold hover:bg-gray-300 transition-all"
                                          >
                                            🔄 重新答题
                                          </button>
                                        </>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </ol>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 评估方式 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-green-600" />
                评估方式
              </h2>
              <div className="space-y-4">
                {course.assessment.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                      <span className="font-medium text-gray-900">{item.type}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-40 bg-gray-200 rounded-full h-3 mr-4">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full" 
                          style={{ width: `${item.weight}%` }}
                        ></div>
                      </div>
                      <span className="font-bold text-green-600 w-12 text-right">{item.weight}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* 学习中心 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                学习中心
              </h3>
              
              {/* 学习进度 */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">学习进度</span>
                  <span className="font-bold text-green-600">{course.learningCenter.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${course.learningCenter.progress}%` }}
                  ></div>
                </div>
              </div>
              
              {/* 学习资源 */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-4">学习资源</h4>
                <ul className="space-y-3">
                  {course.learningCenter.resources.map((resource, index) => (
                    <li key={index} className="flex items-center text-gray-600 hover:text-green-600 cursor-pointer transition-colors">
                      <BookOpen className="w-4 h-4 mr-3 text-green-500" />
                      {resource}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                继续学习
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
