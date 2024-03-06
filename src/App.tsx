import './index.css';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Main from './pages/Main';
import Project from './pages/projects/Project';
import PJR from '@/config/projects/PJR.json';
import { LandingVideoProvider } from './contexts/LandingVideoContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />}></Route>
      <Route path="/proyectos/parroquia-jcr" element={<Project {...PJR} />}></Route>
    </>
  )
);

export default function App() {
  return (
    <LandingVideoProvider>
      <RouterProvider router={router}/>
    </LandingVideoProvider>
  );
}
