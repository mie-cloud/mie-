import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, CheckCircle, Clock, Plus, Trash2, Edit, Award, BookOpen, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const weeklyPlan = [
  {
    id: 1,
    date: '周一',
    tasks: [
      { id: 101, title: 'Python基础 - 变量和数据类型', course: 'Python基础', time: '09:00-10:30', completed: true },
      { id: 102, title: '完成第1章课后练习', course: 'Python基础', time: '14:00-15:00', completed: true },
      { id: 103, title: '复习上周错题', course: '错题本', time: '19:00-20:00', completed: false }
    ]
  },
  {
    id: 2,
    date: '周二',
    tasks: [
      { id: 201, title: 'Python基础 - 控制流', course: 'Python基础', time: '09:00-10:30', completed: false },
      { id: 202, title: '数据分析技术 - NumPy基础', course: '数据分析技术', time: '14:00-16:00', completed: false }
    ]
  },
  {
    id: 3,
    date: '周三',
    tasks: [
      { id: 301, title: 'Python基础 - 函数和模块', course: 'Python基础', time: '09:00-11:00', completed: false },
      { id: 302, title: '实战项目 - 数据清洗练习', course: '训练项目', time: '15:00-17:00', completed: false }
    ]
  },
  {
    id: 4,
    date: '周四',
    tasks: [
      { id: 401, title: '数据分析技术 - Pandas数据处理', course: '数据分析技术', time: '09:00-11:00', completed: false },
      { id: 402, title: '完成第3章练习题', course: '数据分析技术', time: '14:00-15:00', completed: false }
    ]
  },
  {
    id: 5,
    date: '周五',
    tasks: [
      { id: 501, title: '数据采集与处理 - requests库', course: '数据采集与处理', time: '10:00-11:30', completed: false },
      { id: 502, title: '周末学习规划', course: '学习计划', time: '16:00-17:00', completed: false }
    ]
  },
  {
    id: 6,
    date: '周六',
    tasks: [
      { id: 601, title: '复习本周所学内容', course: '复习', time: '09:00-11:00', completed: false },
      { id: 602, title: '完成本周实战项目', course: '训练项目', time: '14:00-17:00', completed: false }
    ]
  },
  {
    id: 7,
    date: '周日',
    tasks: [
      { id: 701, title: '自由学习时间', course: '自主学习', time: '灵活安排', completed: false },
      { id: 702, title: '制定下周学习计划', course: '学习计划', time: '20:00-21:00', completed: false }
    ]
  }
];

const longTermGoals = [
  {
    id: 1,
    title: '完成Python基础课程',
    description: '系统学习Python编程语言，掌握核心概念',
    deadline: '2024-06-30',
    progress: 60,
    status: '进行中'
  },
  {
    id: 2,
    title: '掌握数据分析技术',
    description: '学会使用Pandas、NumPy等工具进行数据分析',
    deadline: '2024-07-31',
    progress: 30,
    status: '进行中'
  },
  {
    id: 3,
    title: '完成3个实战项目',
    description: '将所学知识应用到实际项目中',
    deadline: '2024-08-31',
    progress: 20,
    status: '进行中'
  }
];

export default function PlanPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>返回首页</span>
          </Link>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">学习计划</h1>
              <p className="text-gray-600">制定和管理你的专属学习计划</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg transition-all">
              <Plus className="w-5 h-5" />
              添加任务
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 左侧：周计划 */}
          <div className="lg:col-span-2 space-y-6">
            {weeklyPlan.map((day) => (
              <div key={day.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">{day.date}</h2>
                  <div className="text-sm text-gray-500">
                    已完成 {day.tasks.filter(t => t.completed).length}/{day.tasks.length}
                  </div>
                </div>
                
                <div className="space-y-3">
                  {day.tasks.map((task) => (
                    <div key={task.id} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group">
                      <button className={`mt-1 w-5 h-5 rounded-full border-2 flex-shrink-0 transition-colors ${
                        task.completed 
                          ? 'bg-green-500 border-green-500' 
                          : 'border-gray-300 hover:border-green-500'
                      }`}>
                        {task.completed && <CheckCircle className="w-3 h-3 text-white ml-0.5 mt-0.5" />}
                      </button>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <span className={`text-sm font-medium ${
                            task.completed ? 'text-gray-500 line-through' : 'text-gray-900'
                          }`}>
                            {task.title}
                          </span>
                          <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">
                            {task.course}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {task.time}
                        </div>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 右侧：长期目标和进度 */}
          <div className="space-y-6">
            {/* 学习进度 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-green-600" />
                学习进度
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Python基础</span>
                    <span className="text-green-600 font-medium">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">数据分析技术</span>
                    <span className="text-green-600 font-medium">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">数据采集与处理</span>
                    <span className="text-green-600 font-medium">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 长期目标 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-600" />
                长期目标
              </h3>
              <div className="space-y-4">
                {longTermGoals.map((goal) => (
                  <div key={goal.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{goal.title}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        goal.status === '进行中' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {goal.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{goal.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      截止日期：{goal.deadline}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{ width: `${goal.progress}%` }}></div>
                    </div>
                    <div className="text-right text-sm text-gray-500 mt-1">{goal.progress}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 今日任务统计 */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                今日统计
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-green-100">总任务数</span>
                  <span className="text-2xl font-bold">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-100">已完成</span>
                  <span className="text-2xl font-bold">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-100">完成率</span>
                  <span className="text-2xl font-bold">67%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
