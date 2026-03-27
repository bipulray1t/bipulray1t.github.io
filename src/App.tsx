import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import ProjectsPage from './components/ProjectsPage';
import DemoPage from './components/DemoPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/demo/:id" element={<DemoPage />} />
      </Routes>
    </Router>
  );
}
