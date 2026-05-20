import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, AlertCircle, Clock, CheckCircle, Trash2, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const wrongAnswers = [
  {
    id: 1,
    subject: 'Python基础',
    question: 'Python中用于单行注释的符号是？',
    yourAnswer: '//',
    correctAnswer: '#',
    wrongTime: '2024-05-20 14:30',
    chapter: 'Python环境搭建和基础语法',
    difficulty: '简单',
    status: '未复习'
  },
  {
    id: 2,
    subject: '数据分析技术',
    question: '以下哪个不是数据分析的基本步骤？',
    yourAnswer: '数据清洗',
    correctAnswer: '数据删除',
    wrongTime: '2024-05-19 10:15',
    chapter: '数据分析概述',
    difficulty: '简单',
    status: '已复习'
  },
  {
    id: 3,
    subject: '数据采集与处理',
    question: '以下哪个是HTML标签？',
    yourAnswer: '.class',
    correctAnswer: '<div>',
    wrongTime: '2024-05-18 16:45',
    chapter: 'HTML和CSS基础',
    difficulty: '简单',
    status: '未复习'
  },
  {
    id: 4,
    subject: 'Python基础',
    question: '以下哪个不是Python的基本数据类型？',
    yourAnswer: 'string',
    correctAnswer: 'double',
    wrongTime: '2024-05-17 11:20',
    chapter: '变量、数据类型和运算符',
    difficulty: '中等',
    status: '已复习'
  },
  {
    id: 5,
    subject: '数据分析技术',
    question: 'Pandas中读取CSV文件的函数是？',
    yourAnswer: 'load_csv()',
    correctAnswer: 'read_csv()',
    wrongTime: '2024-05-16 15:30',
    chapter: 'Pandas数据处理',
    difficulty: '中等',
    status: '未复习'
  }
];

export default function WrongAnswersPage() {
  const stats = {
    totalWrong: 5,
    unReviewed: 3,
    reviewed: 2,
    todayWrong: 1
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>返回首页</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">错题本</h1>
          <p className="text-gray-600">整理和复习你的错题，查漏补缺</p>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
            <div className="text-2xl font-bold text-red-600">{stats.totalWrong}</div>
            <div className="text-gray-600">总错题数</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
            <div className="text-2xl font-bold text-yellow-600">{stats.unReviewed}</div>
            <div className="text-gray-600">待复习</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600">{stats.reviewed}</div>
            <div className="text-gray-600">已复习</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
            <div className="text-2xl font-bold text-blue-600">{stats.todayWrong}</div>
            <div className="text-gray-600">今日新增</div>
          </div>
        </div>

        {/* 筛选和搜索 */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <div className="flex flex-wrap gap-4 items-center">
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
              <Filter className="w-4 h-4" />
              全部
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              未复习
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              已复习
            </button>
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">所有科目</option>
              <option value="python">Python基础</option>
              <option value="data">数据分析技术</option>
              <option value="collection">数据采集与处理</option>
            </select>
          </div>
        </div>

        {/* 错题列表 */}
        <div className="space-y-4">
          {wrongAnswers.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {item.subject}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.difficulty === '简单' 
                    ? 'bg-blue-100 text-blue-800' 
                    : item.difficulty === '中等' 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {item.difficulty}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.status === '已复习' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {item.wrongTime}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-2">{item.chapter}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{item.question}</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <span className="text-red-800 font-medium">你的答案</span>
                    </div>
                    <div className="text-red-700">{item.yourAnswer}</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-green-800 font-medium">正确答案</span>
                    </div>
                    <div className="text-green-700">{item.correctAnswer}</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                  <CheckCircle className="w-4 h-4" />
                  标记已复习
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  <BookOpen className="w-4 h-4" />
                  查看知识点
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-colors ml-auto">
                  <Trash2 className="w-4 h-4" />
                  删除
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 分页 */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-600 hover:bg-gray-50 transition-colors">
            上一页
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium">1</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-600 hover:bg-gray-50 transition-colors">2</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-600 hover:bg-gray-50 transition-colors">3</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-600 hover:bg-gray-50 transition-colors">
            下一页
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
