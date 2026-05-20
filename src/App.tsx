import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CourseDetail from './pages/CourseDetail';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import PracticePage from './pages/PracticePage';
import WrongAnswersPage from './pages/WrongAnswersPage';
import PlanPage from './pages/PlanPage';
import LeaderboardPage from './pages/LeaderboardPage';
import CommunityPage from './pages/CommunityPage';
import MyLearningPage from './pages/MyLearningPage';
import Placeholder from './pages/Placeholder';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/wrong-answers" element={<WrongAnswersPage />} />
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/my-learning" element={<MyLearningPage />} />
      </Routes>
    </Router>
  );
}
