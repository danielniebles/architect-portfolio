import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Project from './pages/projects/Project';
import PJR from '@/config/projects/PJR.json';
import { LandingVideoProvider } from './contexts/LandingVideoContext';

export default function App() {
  return (
    <LandingVideoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/project/parroquia-jcr" element={<Project {...PJR} />}></Route>
        </Routes>
      </BrowserRouter>
    </LandingVideoProvider>
  );
}
