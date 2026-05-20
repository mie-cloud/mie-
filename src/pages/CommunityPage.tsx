import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Users, Search, Plus, ThumbsUp, Clock, TrendingUp, BookOpen, Trash2, Edit, Share2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const discussions = [
  {
    id: 1,
    title: 'Python基础：如何理解列表推导式？',
    author: '李明',
    authorAvatar: '李',
    content: '我在学习Python列表推导式，感觉有点绕，有没有大佬能分享一下自己的学习心得？',
    tags: ['Python基础', '求助'],
    likes: 42,
    replies: 18,
    views: 256,
    time: '3小时前',
    isHot: true
  },
  {
    id: 2,
    title: '分享我的数据分析实战经验分享',
    author: '王芳',
    authorAvatar: '王',
    content: '大家好，我终于完成了第一个数据分析课程，想给新手们分享一下我的学习路径和心得...',
    tags: ['数据分析', '分享'],
    likes: 89,
    replies: 32,
    views: 678,
    time: '6小时前',
    isHot: true
  },
  {
    id: 3,
    title: 'Pandas中DataFrame的常用操作汇总',
    author: '张伟',
    authorAvatar: '张',
    content: '整理了一份Pandas中常用操作的常用函数和方法，希望对大家有帮助！',
    tags: ['Pandas', '资料'],
    likes: 156,
    replies: 24,
    views: 890,
    time: '1天前',
    isHot: true
  },
  {
    id: 4,
    title: '零基础入门到精通Python爬虫入门求助',
    author: '刘洋',
    authorAvatar: '刘',
    content: '想学习爬虫但不知道从哪里开始，求推荐学习资源和学习顺序。',
    tags: ['爬虫', '求助'],
    likes: 23,
    replies: 45,
    views: 345,
    time: '2天前',
    isHot: false
  },
  {
    id: 5,
    title: '数据可视化最佳实践',
    author: '陈静',
    authorAvatar: '陈',
    content: '分享一些数据可视化的技巧和经验，如何让图表更美观更易读。',
    tags: ['数据可视化', '分享'],
    likes: 67,
    replies: 15,
    views: 432,
    time: '3天前',
    isHot: false
  }
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>返回首页</span>
          </Link>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">社区讨论</h1>
              <p className="text-gray-600">与志同道合的学习者交流学习心得</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg transition-all">
              <Plus className="w-5 h-5" />
              发布话题
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 主内容区 */}
          <div className="lg:col-span-2">
            {/* 搜索框 */}
            <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索讨论话题..."
                  className="flex-1 bg-transparent border-none focus:outline-none text-gray-900"
                />
              </div>
            </div>

            {/* 话题列表 */}
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {discussion.authorAvatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg font-bold text-gray-900 flex-1">
                          {discussion.title}
                          {discussion.isHot && (
                            <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-medium">热门</span>
                          )}
                        </h3>
                      </div>
                      <div className="text-gray-600 mb-3 line-clamp-2">
                        {discussion.content}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {discussion.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Users className="w-4 h-4" />
                            {discussion.author}
                          </div>
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Clock className="w-4 h-4" />
                            {discussion.time}
                          </div>
                        </div>
                        <div className="flex items-center gap-6 text-gray-500 text-sm">
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="w-4 h-4" />
                            {discussion.likes}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            {discussion.replies}
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            {discussion.views}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* 热门话题 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                热门话题
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">Python入门</div>
                    <div className="text-sm text-gray-500">234 讨论</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">数据分析实战</div>
                    <div className="text-sm text-gray-500">189 讨论</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">Pandas技巧</div>
                    <div className="text-sm text-gray-500">156 讨论</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">数据可视化</div>
                    <div className="text-sm text-gray-500">123 讨论</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 活跃用户 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-green-600" />
                活跃用户
              </h3>
              <div className="space-y-3">
                {[
                  { name: '李明', avatar: '李', posts: 156 },
                  { name: '王芳', avatar: '王', posts: 134 },
                  { name: '张伟', avatar: '张', posts: 123 },
                  { name: '刘洋', avatar: '刘', posts: 98 },
                  { name: '陈静', avatar: '陈', posts: 87 },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                      {user.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.posts} 帖子</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 社区规则 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">社区规则</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• 友善交流，尊重他人</li>
                <li>• 分享有价值的内容</li>
                <li>• 禁止广告和垃圾信息</li>
                <li>• 保持学习氛围</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
