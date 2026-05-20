import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CourseDetail from './pages/CourseDetail';
import Placeholder from './pages/Placeholder';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/projects" element={<Placeholder title="训练项目" description="探索各种实战项目，提升你的数据分析技能" />} />
        <Route path="/project/:id" element={<Placeholder title="项目详情" description="深入学习这个实战项目" />} />
        <Route path="/practice" element={<Placeholder title="练习中心" description="海量练习题，巩固你的知识" />} />
        <Route path="/wrong-answers" element={<Placeholder title="错题本" description="复习你的错题，查漏补缺" />} />
        <Route path="/plan" element={<Placeholder title="学习计划" description="制定你的专属学习计划" />} />
        <Route path="/leaderboard" element={<Placeholder title="排行榜" description="看看你在榜单上的位置" />} />
        <Route path="/community" element={<Placeholder title="社区" description="与其他学习者交流互动" />} />
        <Route path="/my-learning" element={<Placeholder title="我的学习" description="查看你的学习记录和进度" />} />
      </Routes>
    </Router>
  );
}
