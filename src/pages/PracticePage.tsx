import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, Clock, Trophy, Target, Users, Zap, BarChart3, Code, Database } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const practiceTopics = [
  {
    id: 1,
    title: 'Python基础',
    icon: '🐍',
    totalQuestions: 150,
    completed: 85,
    accuracy: 82,
    color: 'green'
  },
  {
    id: 2,
    title: '数据分析',
    icon: '📊',
    totalQuestions: 200,
    completed: 120,
    accuracy: 78,
    color: 'blue'
  },
  {
    id: 3,
    title: '数据可视化',
    icon: '📈',
    totalQuestions: 80,
    completed: 45,
    accuracy: 85,
    color: 'purple'
  },
  {
    id: 4,
    title: '数据库',
    icon: '🗄️',
    totalQuestions: 100,
    completed: 60,
    accuracy: 75,
    color: 'orange'
  },
  {
    id: 5,
    title: '数据采集',
    icon: '🕸️',
    totalQuestions: 70,
    completed: 35,
    accuracy: 88,
    color: 'cyan'
  },
  {
    id: 6,
    title: '机器学习',
    icon: '🤖',
    totalQuestions: 120,
    completed: 25,
    accuracy: 68,
    color: 'pink'
  }
];

const recentPractice = [
  { id: 1, topic: 'Python基础', question: 'Python中用于定义函数的关键字是？', status: 'correct', time: '10分钟前' },
  { id: 2, topic: '数据分析', question: 'Pandas中读取CSV文件的函数是？', status: 'correct', time: '20分钟前' },
  { id: 3, topic: 'Python基础', question: '以下哪个不是Python的基本数据类型？', status: 'wrong', time: '30分钟前' },
  { id: 4, topic: '数据可视化', question: 'Matplotlib中创建折线图的函数是？', status: 'correct', time: '1小时前' },
  { id: 5, topic: '数据库', question: 'SQL中用于查询数据的语句是？', status: 'correct', time: '1小时前' }
];

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-12">
          <div>
            <Link
              to="/"
              className="inline-flex items-center text-green-600 hover:text-green-800 font-medium mb-4 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>返回首页</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">练习中心</h1>
            <p className="text-gray-600 mt-2">海量练习题，巩固你的知识</p>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">520</div>
                <div className="text-green-100">已完成题目</div>
              </div>
              <CheckCircle className="w-12 h-12 opacity-50" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600">80%</div>
                <div className="text-gray-600">正确率</div>
              </div>
              <BarChart3 className="w-12 h-12 text-gray-300" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600">6</div>
                <div className="text-gray-600">练习分类</div>
              </div>
              <BookOpen className="w-12 h-12 text-gray-300" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600">25</div>
                <div className="text-gray-600">连续天数</div>
              </div>
              <Trophy className="w-12 h-12 text-gray-300" />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Practice Topics */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">练习分类</h2>
            <div className="space-y-4">
              {practiceTopics.map((topic) => (
                <div 
                  key={topic.id}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-4xl mr-4">{topic.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{topic.title}</h3>
                        <p className="text-gray-600">{topic.completed} / {topic.totalQuestions} 完成</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{topic.accuracy}%</div>
                      <div className="text-sm text-gray-500">正确率</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all ${
                          topic.color === 'green' ? 'bg-green-500' :
                          topic.color === 'blue' ? 'bg-blue-500' :
                          topic.color === 'purple' ? 'bg-purple-500' :
                          topic.color === 'orange' ? 'bg-orange-500' :
                          topic.color === 'cyan' ? 'bg-cyan-500' : 'bg-pink-500'
                        }`}
                        style={{ width: `${(topic.completed / topic.totalQuestions) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Start */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                快速练习
              </h3>
              <p className="text-green-100 mb-6">今天还没有练习，开始你的每日练习吧！</p>
              <button className="w-full bg-white text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                开始练习
              </button>
            </div>
            
            {/* Recent Practice */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4">最近练习</h3>
              <div className="space-y-4">
                {recentPractice.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full mr-2">
                        {item.topic}
                      </span>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-1">{item.question}</p>
                    </div>
                    <div className="flex items-center">
                      {item.status === 'correct' ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      ) : (
                        <Target className="w-5 h-5 text-red-500 mr-2" />
                      )}
                      <span className="text-xs text-gray-400">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tips */}
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">💡 练习小贴士</h3>
              <p className="text-yellow-700 text-sm">
                每天坚持练习10-15道题目，可以有效巩固知识，提高解题能力！
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
