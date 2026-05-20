import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, Trophy, Target, TrendingUp, Award, Users, CheckCircle, PlayCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const myCourses = [
  { id: 1, title: 'Python基础', progress: 60, lastLesson: '第3章：函数和模块', time: '昨天', icon: '🐍' },
  { id: 2, title: '数据分析技术', progress: 30, lastLesson: '第2章：NumPy基础', time: '3天前', icon: '📊' },
  { id: 3, title: '数据采集与处理', progress: 20, lastLesson: '第1章：HTML和CSS基础', time: '1周前', icon: '🕸️' }
];

const recentActivities = [
  { id: 1, type: '完成', title: '完成了Python基础的第3章练习', time: '2小时前', icon: <CheckCircle className="w-5 h-5 text-green-600" /> },
  { id: 2, type: '学习', title: '开始学习数据分析技术课程', time: '昨天', icon: <BookOpen className="w-5 h-5 text-blue-600" /> },
  { id: 3, type: '练习', title: '在练习中心完成了20道题目', time: '3天前', icon: <Target className="w-5 h-5 text-purple-600" /> },
  { id: 4, type: '成就', title: '获得了\"初学者\"成就', time: '1周前', icon: <Trophy className="w-5 h-5 text-yellow-600" /> }
];

const achievements = [
  { id: 1, title: '初学者', description: '完成第一个课程', earned: true, icon: '🎓' },
  { id: 2, title: '勤奋学者', description: '连续学习7天', earned: true, icon: '🔥' },
  { id: 3, title: '练习达人', description: '完成100道练习题', earned: false, progress: 52, icon: '💪' },
  { id: 4, title: '全课程通', description: '完成所有课程', earned: false, progress: 20, icon: '🏆' }
];

const studyStats = [
  { label: '总学习时长', value: '120小时', icon: <Clock className="w-6 h-6 text-blue-600" /> },
  { label: '完成课程', value: '2门', icon: <BookOpen className="w-6 h-6 text-green-600" /> },
  { label: '练习题目', value: '520道', icon: <Target className="w-6 h-6 text-purple-600" /> },
  { label: '连续天数', value: '25天', icon: <TrendingUp className="w-6 h-6 text-orange-600" /> }
];

export default function MyLearningPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>返回首页</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">我的学习</h1>
          <p className="text-gray-600">查看你的学习进度和成就</p>
        </div>

        {/* 个人信息卡片 */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-4xl shadow-lg">
              🐑
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">许小烁</h2>
              <p className="text-gray-600">广东科学技术学院 · 商学院</p>
              <p className="text-green-600 font-medium mt-1">数据分析员等级</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-yellow-600">⭐</span>
                <span className="text-gray-700">7200 积分</span>
                <span className="text-gray-400 mx-2">·</span>
                <span className="text-orange-600 flex items-center gap-1">
                  🔥 25 天连续
                </span>
              </div>
            </div>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              编辑资料
            </button>
          </div>
        </div>

        {/* 学习统计 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {studyStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                {stat.icon}
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 进行中的课程 */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">进行中的课程</h3>
              <Link to="/courses" className="text-green-600 hover:text-green-800 font-medium">
                查看全部
              </Link>
            </div>

            {myCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    {course.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900">{course.title}</h4>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {course.progress}%
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      上次学习：{course.lastLesson} · {course.time}
                    </p>
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                        <PlayCircle className="w-4 h-4" />
                        继续学习
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                        查看详情
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 成就和动态 */}
          <div className="space-y-6">
            {/* 成就 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-600" />
                我的成就
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className={`p-4 rounded-lg border ${achievement.earned ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <div className="font-medium text-gray-900">{achievement.title}</div>
                    <div className="text-xs text-gray-600 mb-2">{achievement.description}</div>
                    {!achievement.earned && (
                      <div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${achievement.progress}%` }}></div>
                        </div>
                        <div className="text-xs text-gray-500">{achievement.progress}%</div>
                      </div>
                    )}
                    {achievement.earned && (
                      <div className="text-xs text-green-600 font-medium">已获得</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 最近活动 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                最近活动
              </h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900">{activity.title}</div>
                      <div className="text-xs text-gray-500">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
