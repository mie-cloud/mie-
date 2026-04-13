import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { ArrowLeft } from 'lucide-react';

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回首页
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-6xl mb-4">{course.icon}</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{course.title}</h1>
          <p className="text-gray-600 text-lg">{course.description}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">课程内容</h2>
          
          {course.id === 'data-analysis' ? (
            <div className="space-y-8">
              {/* 课程目标 */}
              <div className="p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">课程目标</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    掌握数据分析的基本概念和方法
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    熟练使用 Pandas、NumPy 等数据分析库
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    学习数据可视化技术，使用 Matplotlib、Seaborn 等工具
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    掌握统计分析方法在商务决策中的应用
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    培养数据分析思维和解决实际商务问题的能力
                  </li>
                </ul>
              </div>

              {/* 课程大纲 */}
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">课程大纲</h3>
                
                <div className="space-y-6">
                  {/* 第1章 */}
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">第1章：数据分析概述</h4>
                    <ul className="pl-6 space-y-1 text-gray-600 list-disc">
                      <li>数据分析的定义和重要性</li>
                      <li>数据分析的流程和方法</li>
                      <li>数据分析在商务领域的应用</li>
                    </ul>
                  </div>
                  
                  {/* 第2章 */}
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">第2章：NumPy 基础</h4>
                    <ul className="pl-6 space-y-1 text-gray-600 list-disc">
                      <li>NumPy 数组的创建和操作</li>
                      <li>数组的索引和切片</li>
                      <li>NumPy 的数学运算</li>
                      <li>广播机制</li>
                    </ul>
                  </div>
                  
                  {/* 第3章 */}
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">第3章：Pandas 数据处理</h4>
                    <ul className="pl-6 space-y-1 text-gray-600 list-disc">
                      <li>Series 和 DataFrame 的创建</li>
                      <li>数据的读取和写入</li>
                      <li>数据清洗和预处理</li>
                      <li>数据分组和聚合</li>
                      <li>数据合并和连接</li>
                    </ul>
                  </div>
                  
                  {/* 第4章 */}
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">第4章：数据可视化</h4>
                    <ul className="pl-6 space-y-1 text-gray-600 list-disc">
                      <li>Matplotlib 基础</li>
                      <li>折线图、柱状图、散点图等基本图表</li>
                      <li>Seaborn 高级可视化</li>
                      <li>交互式可视化工具介绍</li>
                    </ul>
                  </div>
                  
                  {/* 第5章 */}
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">第5章：统计分析方法</h4>
                    <ul className="pl-6 space-y-1 text-gray-600 list-disc">
                      <li>描述性统计分析</li>
                      <li>假设检验</li>
                      <li>相关分析和回归分析</li>
                      <li>聚类分析</li>
                    </ul>
                  </div>
                  
                  {/* 第6章 */}
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">第6章：商务数据分析案例</h4>
                    <ul className="pl-6 space-y-1 text-gray-600 list-disc">
                      <li>销售数据分析</li>
                      <li>客户行为分析</li>
                      <li>市场趋势分析</li>
                      <li>供应链数据分析</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 学习方法 */}
              <div className="p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">学习方法</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    理论学习与实践相结合，每章都有相应的实践练习
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    利用 Jupyter Notebook 进行代码练习和实验
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    小组合作完成数据分析项目
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    定期进行案例分析和讨论
                  </li>
                </ul>
              </div>

              {/* 评估方式 */}
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">评估方式</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    平时作业：30%
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    实验报告：20%
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    小组项目：30%
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    期末考试：20%
                  </li>
                </ul>
              </div>

              {/* 参考资料 */}
              <div className="p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">参考资料</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    《Python数据分析》，Wes McKinney，机械工业出版社
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    《利用Python进行数据分析》，Wes McKinney，人民邮电出版社
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    《Python数据可视化》，Kirthi Raman，人民邮电出版社
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    在线资源：Pandas官方文档、Matplotlib官方文档
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-6 bg-blue-50 rounded-xl border-2 border-dashed border-blue-200">
                <p className="text-gray-600 text-center">
                  课程内容待补充...
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                <p className="text-gray-600 text-center">
                  课程内容待补充...
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                <p className="text-gray-600 text-center">
                  课程内容待补充...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
