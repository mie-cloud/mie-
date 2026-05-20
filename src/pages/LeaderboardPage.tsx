import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Users, TrendingUp, Clock, Award, Star, Target, Flame } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const leaderboardData = [
  { id: 1, rank: 1, name: '李明', avatar: '李', points: 12580, coursesCompleted: 8, streak: 45, level: '数据大师', avatarColor: 'from-yellow-400 to-yellow-600' },
  { id: 2, rank: 2, name: '王芳', avatar: '王', points: 11200, coursesCompleted: 7, streak: 38, level: '数据专家', avatarColor: 'from-gray-300 to-gray-500' },
  { id: 3, rank: 3, name: '张伟', avatar: '张', points: 9850, coursesCompleted: 6, streak: 32, level: '数据专家', avatarColor: 'from-amber-600 to-amber-800' },
  { id: 4, rank: 4, name: '许小烁', avatar: '🐑', points: 7200, coursesCompleted: 5, streak: 25, level: '数据分析员', avatarColor: 'from-green-500 to-emerald-600', isMe: true },
  { id: 5, rank: 5, name: '刘洋', avatar: '刘', points: 6800, coursesCompleted: 4, streak: 20, level: '数据分析员', avatarColor: 'from-blue-500 to-blue-700' },
  { id: 6, rank: 6, name: '陈静', avatar: '陈', points: 5600, coursesCompleted: 4, streak: 18, level: '初级分析师', avatarColor: 'from-purple-500 to-purple-700' },
  { id: 7, rank: 7, name: '杨帆', avatar: '杨', points: 4900, coursesCompleted: 3, streak: 15, level: '初级分析师', avatarColor: 'from-pink-500 to-pink-700' },
  { id: 8, rank: 8, name: '赵敏', avatar: '赵', points: 4200, coursesCompleted: 3, streak: 12, level: '数据爱好者', avatarColor: 'from-orange-500 to-orange-700' },
  { id: 9, rank: 9, name: '周涛', avatar: '周', points: 3800, coursesCompleted: 2, streak: 10, level: '数据爱好者', avatarColor: 'from-cyan-500 to-cyan-700' },
  { id: 10, rank: 10, name: '吴鹏', avatar: '吴', points: 3200, coursesCompleted: 2, streak: 8, level: '数据入门者', avatarColor: 'from-red-500 to-red-700' }
];

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>返回首页</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">排行榜</h1>
          <p className="text-gray-600">与其他学习者一起比拼学习进度</p>
        </div>

        {/* 排行榜头部统计 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900">12580</div>
            <div className="text-gray-600">最高积分</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <Users className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900">1,234</div>
            <div className="text-gray-600">活跃用户</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900">45</div>
            <div className="text-gray-600">最高连续天数</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <Award className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900">8</div>
            <div className="text-gray-600">最多完成课程</div>
          </div>
        </div>

        {/* 前三名展示 */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">🏆 本周前三名</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            {/* 第二名 */}
            <div className="flex flex-col items-center order-2 md:order-1">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-3 border-4 border-white shadow-lg">
                  {leaderboardData[1].avatar}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
              </div>
              <div className="text-center mt-3">
                <div className="font-bold text-gray-900">{leaderboardData[1].name}</div>
                <div className="text-gray-600">{leaderboardData[1].points} 积分</div>
                <div className="text-sm text-gray-500">{leaderboardData[1].level}</div>
              </div>
            </div>

            {/* 第一名 */}
            <div className="flex flex-col items-center order-1 md:order-2">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-3 border-4 border-yellow-300 shadow-xl">
                  {leaderboardData[0].avatar}
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <Trophy className="w-10 h-10 text-yellow-500" />
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="text-xl font-bold text-gray-900">{leaderboardData[0].name}</div>
                <div className="text-lg text-yellow-600 font-semibold">{leaderboardData[0].points} 积分</div>
                <div className="text-sm text-gray-500">{leaderboardData[0].level}</div>
              </div>
            </div>

            {/* 第三名 */}
            <div className="flex flex-col items-center order-3">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-white text-xl font-bold mb-3 border-4 border-white shadow-md">
                  {leaderboardData[2].avatar}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
              </div>
              <div className="text-center mt-3">
                <div className="font-bold text-gray-900">{leaderboardData[2].name}</div>
                <div className="text-gray-600">{leaderboardData[2].points} 积分</div>
                <div className="text-sm text-gray-500">{leaderboardData[2].level}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 完整排行榜 */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">排名</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">用户</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">等级</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">积分</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">完成课程</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">连续天数</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leaderboardData.map((user) => (
                  <tr key={user.id} className={user.isMe ? 'bg-green-50' : 'hover:bg-gray-50'}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {user.rank <= 3 ? (
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            user.rank === 1 ? 'bg-yellow-100 text-yellow-700' :
                            user.rank === 2 ? 'bg-gray-100 text-gray-700' :
                            'bg-amber-100 text-amber-700'
                          }`}>
                            {user.rank}
                          </div>
                        ) : (
                          <span className="text-gray-900 font-medium">{user.rank}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 bg-gradient-to-br ${user.avatarColor} rounded-full flex items-center justify-center text-white font-bold mr-3`}>
                          {user.avatar}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {user.name}
                            {user.isMe && <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">我</span>}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900">{user.level}</td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-green-600">{user.points}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-900">{user.coursesCompleted}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Flame className="w-4 h-4 text-orange-500 mr-1" />
                        <span className="text-gray-900">{user.streak}天</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 我的排名卡片 */}
        <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2">我的排名</h3>
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold">#4</div>
                <div className="text-green-100">7200 积分</div>
                <div className="text-green-100">25 天连续</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-green-100 text-sm">距离上一名</div>
              <div className="text-xl font-bold">+2650 积分</div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
