import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { ArrowLeft, ChevronDown, ChevronUp, BookOpen, Book, BarChart3, FileText, CheckCircle, Code, ListChecks } from 'lucide-react';
import { useState } from 'react';

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === id);
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({});

  const toggleChapter = (chapter: string) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapter]: !prev[chapter]
    }));
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">课程未找到</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* 背景装饰 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-green-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-emerald-300 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-green-600 hover:text-green-800 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="font-medium">返回首页</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-5xl mr-6">
              {course.icon}
            </div>
            <h1 className="text-4xl font-bold text-gray-800">{course.title}</h1>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">{course.description}</p>
        </div>

        {/* 相关技能 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <ListChecks className="w-6 h-6 mr-2 text-green-600" />
            相关技能
          </h2>
          <div className="flex flex-wrap gap-2">
            {course.skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">课程内容</h2>
          
          {/* 课程目标 */}
          <div className="p-6 bg-green-50 rounded-xl mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-green-600" />
              课程目标
            </h3>
            <ul className="space-y-2 text-gray-600">
              {course.objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  {objective}
                </li>
              ))}
            </ul>
          </div>

          {/* 课程大纲 */}
          <div className="p-6 bg-gray-50 rounded-xl mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Book className="w-5 h-5 mr-2 text-green-600" />
              课程大纲
            </h3>
            
            <div className="space-y-6">
              {course.chapters.map((chapter, index) => (
                <div key={chapter.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => toggleChapter(chapter.id)}
                  >
                    <h4 className="font-bold text-gray-800">第{index + 1}章：{chapter.title}</h4>
                    {expandedChapters[chapter.id] ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                  <div className="p-4">
                    <ul className="pl-6 space-y-1 text-gray-600 list-disc mb-4">
                      {chapter.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    
                    {expandedChapters[chapter.id] && (
                      <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                        <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                          练习题
                        </h5>
                        <ol className="pl-5 space-y-4 text-gray-600 list-decimal">
                          {chapter.exercises.map((exercise, idx) => (
                            <li key={idx}>
                              <p className="font-medium mb-2">{exercise.question}</p>
                              {exercise.type === 'multiple-choice' && exercise.options && (
                                <div className="pl-4 space-y-1">
                                  {exercise.options.map((option, optIdx) => (
                                    <div key={optIdx} className="flex items-center">
                                      <input 
                                        type="radio" 
                                        name={`exercise-${chapter.id}-${idx}`} 
                                        id={`option-${optIdx}`} 
                                        className="mr-2"
                                      />
                                      <label htmlFor={`option-${optIdx}`}>{option}</label>
                                    </div>
                                  ))}
                                </div>
                              )}
                              {exercise.type === 'code' && exercise.codeTemplate && (
                                <div className="mt-2">
                                  <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
                                    <code>{exercise.codeTemplate}</code>
                                  </pre>
                                </div>
                              )}
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 评估方式 */}
          <div className="p-6 bg-gray-50 rounded-xl mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-green-600" />
              评估方式
            </h3>
            <ul className="space-y-2 text-gray-600">
              {course.assessment.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  {item.type}：{item.weight}%
                </li>
              ))}
            </ul>
          </div>

          {/* 学习中心 */}
          <div className="p-6 bg-green-50 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
              学习中心
            </h3>
            
            {/* 学习进度 */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-2">学习进度</h4>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-green-500 h-4 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${course.learningCenter.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">已完成 {course.learningCenter.progress}%</p>
            </div>
            
            {/* 学习资源 */}
            <div>
              <h4 className="font-medium text-gray-700 mb-2">学习资源</h4>
              <ul className="space-y-2 text-gray-600">
                {course.learningCenter.resources.map((resource, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    {resource}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
