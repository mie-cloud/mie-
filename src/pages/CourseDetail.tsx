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
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, { 
    selectedAnswer: number | null; 
    showResult: boolean;
    codeAnswer: string;
    codeShowResult: boolean;
    codeIsCorrect: boolean;
    codeOutput: string;
  }>>({});

  type ExerciseState = {
    selectedAnswer: number | null; 
    showResult: boolean;
    codeAnswer: string;
    codeShowResult: boolean;
    codeIsCorrect: boolean;
    codeOutput: string;
  };

  const toggleChapter = (chapter: string) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapter]: !prev[chapter]
    }));
  };

  const getExerciseKey = (chapterId: string, exerciseIdx: number) => `${chapterId}-${exerciseIdx}`;

  const handleSelectAnswer = (chapterId: string, exerciseIdx: number, answerIdx: number) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    const current = exerciseAnswers[key] || { codeAnswer: '', codeShowResult: false, codeIsCorrect: false, codeOutput: '' };
    setExerciseAnswers(prev => ({
      ...prev,
      [key]: { 
        selectedAnswer: answerIdx, 
        showResult: prev[key]?.showResult || false,
        codeAnswer: current.codeAnswer,
        codeShowResult: current.codeShowResult,
        codeIsCorrect: current.codeIsCorrect,
        codeOutput: current.codeOutput
      }
    }));
  };

  const handleSubmitAnswer = (chapterId: string, exerciseIdx: number) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    const current = exerciseAnswers[key];
    if (current?.selectedAnswer !== null) {
      setExerciseAnswers(prev => ({
        ...prev,
        [key]: { 
          ...current, 
          showResult: true,
          codeAnswer: current.codeAnswer || '',
          codeShowResult: current.codeShowResult || false,
          codeIsCorrect: current.codeIsCorrect || false,
          codeOutput: current.codeOutput || ''
        }
      }));
    }
  };

  const resetAnswer = (chapterId: string, exerciseIdx: number) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    const current = exerciseAnswers[key] || { codeAnswer: '', codeShowResult: false, codeIsCorrect: false, codeOutput: '' };
    setExerciseAnswers(prev => ({
      ...prev,
      [key]: { 
        selectedAnswer: null, 
        showResult: false,
        codeAnswer: current.codeAnswer,
        codeShowResult: current.codeShowResult,
        codeIsCorrect: current.codeIsCorrect,
        codeOutput: current.codeOutput
      }
    }));
  };

  const getExerciseState = (chapterId: string, exerciseIdx: number) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    return exerciseAnswers[key] || { 
      selectedAnswer: null, 
      showResult: false,
      codeAnswer: '',
      codeShowResult: false,
      codeIsCorrect: false,
      codeOutput: ''
    };
  };

  const handleCodeChange = (chapterId: string, exerciseIdx: number, code: string) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    setExerciseAnswers(prev => ({
      ...prev,
      [key]: { ...prev[key], codeAnswer: code }
    }));
  };

  const handleCodeSubmit = (chapterId: string, exerciseIdx: number) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    const exercise = course?.chapters.find(c => c.id === chapterId)?.exercises[exerciseIdx];
    if (!exercise) return;

    const code = exerciseAnswers[key]?.codeAnswer || '';
    let output = '';
    let isCorrect = false;

    if (exercise.expectedOutput) {
      const mockOutput = simulateCodeExecution(code);
      output = mockOutput.output;
      isCorrect = mockOutput.isCorrect(exercise.expectedOutput);
    } else {
      isCorrect = validateCodeStructure(code);
      output = isCorrect ? '代码语法正确！' : '代码可能存在语法问题';
    }

    setExerciseAnswers(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        codeShowResult: true,
        codeIsCorrect: isCorrect,
        codeOutput: output
      }
    }));
  };

  const simulateCodeExecution = (code: string) => {
    let output = '';
    const lines = code.split('\n');
    
    lines.forEach(line => {
      if (line.trim().startsWith('print(')) {
        const match = line.match(/print\(['"]?(.+?)['"]?\)/);
        if (match) {
          output += match[1] + '\n';
        }
      }
    });

    return {
      output: output.trim(),
      isCorrect: (expected: string) => {
        const normalizedOutput = output.trim().replace(/\s+/g, ' ');
        const normalizedExpected = expected.trim().replace(/\s+/g, ' ');
        return normalizedOutput.includes(normalizedExpected) || normalizedExpected.includes(normalizedOutput);
      }
    };
  };

  const validateCodeStructure = (code: string) => {
    return code.trim().length > 0 && 
           !code.includes('SyntaxError') &&
           !code.includes('IndentationError');
  };

  const resetCode = (chapterId: string, exerciseIdx: number) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    const exercise = course?.chapters.find(c => c.id === chapterId)?.exercises[exerciseIdx];
    const defaultCode = exercise?.codeTemplate || '';
    setExerciseAnswers(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        codeAnswer: defaultCode,
        codeShowResult: false,
        codeIsCorrect: false,
        codeOutput: ''
      }
    }));
  };

  const getChapterContent = (chapterId: string, contentIdx: number): string => {
    const contentMap: Record<string, string[]> = {
      'chapter1': [
        'Python 是一种高级、解释型、面向对象的编程语言。它由 Guido van Rossum 在 1989 年创造，以简洁的语法和强大的功能著称。安装 Python 非常简单，只需从官方网站下载对应版本的安装包即可。',
        'IDE（集成开发环境）是编写 Python 代码的重要工具。常用的 IDE 有 PyCharm、VS Code、Spyder 等。配置好 IDE 后，可以提高编码效率和调试能力。',
        'Python 的基本语法包括变量定义、数据类型、运算符等。Python 使用缩进来表示代码块，这是它的一大特色。代码结构清晰易读。',
        '注释是代码中非常重要的部分，用于解释代码的功能。单行注释使用 # 开头，多行注释使用三个引号包裹。良好的代码风格可以提高代码的可读性和可维护性。'
      ],
      'chapter2': [
        '变量是存储数据的容器。在 Python 中，不需要声明变量类型，直接赋值即可。变量名可以包含字母、数字和下划线，但不能以数字开头。',
        'Python 的基本数据类型包括整数(int)、浮点数(float)、字符串(str)和布尔值(bool)。不同的数据类型有不同的用途和操作方法。',
        '运算符包括算术运算符(+、-、*、/)、比较运算符(==、!=、>、<)和逻辑运算符(and、or、not)。这些运算符用于进行各种计算和判断。',
        '类型转换可以将一种数据类型转换为另一种。常用的转换函数有 int()、float()、str()、bool() 等。需要注意类型转换的规则和可能的错误。'
      ],
      'chapter3': [
        'if 语句用于根据条件执行不同的代码块。可以使用 if、elif、else 来处理多个条件分支。条件表达式返回布尔值。',
        'for 循环用于遍历序列（如列表、字符串等）。range() 函数可以生成一系列数字，常用于控制循环次数。',
        'while 循环会一直执行，直到条件变为 False。需要注意避免无限循环，确保循环条件最终会变为 False。',
        'break 语句用于跳出循环，continue 语句用于跳过当前迭代继续下一次循环。这些控制语句可以帮助我们更灵活地控制循环流程。'
      ],
      'chapter4': [
        '函数是一段可重用的代码块。使用 def 关键字定义函数，可以接收参数并返回结果。函数可以提高代码的复用性和可读性。',
        '函数可以有参数和返回值。参数分为位置参数、关键字参数和默认参数。返回值使用 return 语句返回。',
        '模块是组织代码的方式，可以将相关的函数和变量放在一个文件中。使用 import 语句导入模块，可以使用模块中的功能。',
        'Python 提供了丰富的内置函数和标准库。内置函数如 print()、len()、max() 等可以直接使用，标准库如 math、random 等需要导入后使用。'
      ],
      'chapter5': [
        '列表是可变的有序序列，可以存储不同类型的元素。常用操作包括添加元素(append)、删除元素(remove)、排序(sort)等。',
        '字典是键值对的无序集合。可以通过键来访问值，键必须是不可变的（如字符串、数字、元组）。字典的常用操作包括添加、修改、删除键值对。',
        '元组是不可变的有序序列。与列表类似，但一旦创建就不能修改。常用于存储不应该改变的数据。',
        '集合是无序且不重复的元素集合。常用操作包括求交集(&)、并集(|)、差集(-)等。集合可以用于去重和集合运算。'
      ],
      'chapter6': [
        '文件操作包括打开、读取、写入和关闭文件。使用 open() 函数打开文件，使用 close() 函数关闭文件。',
        '文件读取可以使用 read()、readline()、readlines() 等方法。文件写入可以使用 write()、writelines() 等方法。',
        '异常处理可以捕获和处理程序运行过程中的错误。使用 try-except 语句可以优雅地处理异常，避免程序崩溃。',
        'with 语句可以自动管理文件的打开和关闭，是一种更安全、更简洁的文件操作方式。with 语句块结束时会自动关闭文件。'
      ]
    };
    
    return contentMap[chapterId]?.[contentIdx] || '暂无详细内容';
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
              <a href="#course-outline" className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all mb-4 text-center">
                开始学习
              </a>
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
                        <div className="mt-6 space-y-6">
                          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                            <h5 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                              📚 知识点讲解
                            </h5>
                            <div className="space-y-4 text-gray-700">
                              {chapter.content.map((item, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                  <h6 className="font-semibold text-blue-800 mb-2">知识点 {idx + 1}：{item}</h6>
                                  <p className="text-sm text-gray-600">{getChapterContent(chapter.id, idx)}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
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
                                  {exercise.type === 'code' && (
                                    <div className="mt-4">
                                      <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-500">代码编辑区</span>
                                        {exerciseState.codeShowResult && (
                                          <span className={`text-sm font-bold ${exerciseState.codeIsCorrect ? 'text-green-600' : 'text-red-600'}`}>
                                            {exerciseState.codeIsCorrect ? '✅ 代码正确！' : '❌ 代码有问题'}
                                          </span>
                                        )}
                                      </div>
                                      {exercise.codeTemplate && (
                                        <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                          <span className="text-sm font-semibold text-blue-800">📋 示范代码：</span>
                                          <pre className="mt-2 text-sm text-gray-700 font-mono bg-white p-3 rounded border border-gray-200 overflow-x-auto">{exercise.codeTemplate}</pre>
                                        </div>
                                      )}
                                      <textarea
                                        value={exerciseState.codeAnswer || ''}
                                        onChange={(e) => handleCodeChange(chapter.id, idx, e.target.value)}
                                        placeholder="// 在这里编写你的代码\nprint('Hello, World!')"
                                        className="w-full h-48 bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500 border-2 border-gray-700"
                                      />
                                      {exerciseState.codeShowResult && !exerciseState.codeIsCorrect && exercise.expectedOutput && (
                                        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                                          <div className="font-bold text-red-800 mb-2">❌ 输出结果不匹配</div>
                                          <div className="space-y-2">
                                            <div>
                                              <span className="text-gray-600">你的输出：</span>
                                              <pre className="bg-gray-900 text-red-400 p-3 rounded mt-1">{exerciseState.codeOutput || '(无输出)'}</pre>
                                            </div>
                                            <div>
                                              <span className="text-gray-600">期望输出：</span>
                                              <pre className="bg-gray-900 text-green-400 p-3 rounded mt-1">{exercise.expectedOutput}</pre>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                      {exerciseState.codeShowResult && exerciseState.codeIsCorrect && exercise.explanation && (
                                        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                                          <div className="font-bold text-green-800 mb-2">💡 知识点讲解</div>
                                          <p className="text-gray-700">{exercise.explanation}</p>
                                        </div>
                                      )}
                                      <div className="mt-4 flex gap-3">
                                        {!exerciseState.codeShowResult ? (
                                          <button
                                            onClick={() => handleCodeSubmit(chapter.id, idx)}
                                            className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-xl font-bold hover:shadow-lg transition-all"
                                          >
                                            ▶️ 运行代码
                                          </button>
                                        ) : (
                                          <button
                                            onClick={() => resetCode(chapter.id, idx)}
                                            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl font-bold hover:bg-gray-300 transition-all"
                                          >
                                            🔄 重新编写
                                          </button>
                                        )}
                                      </div>
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
