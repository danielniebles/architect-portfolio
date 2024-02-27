import './App.css';
import './index.css';
import { Switch, Route } from 'wouter';
import Main from './pages/Main';
import Project from './pages/Project';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Main} />
      <Route path="/projects" component={Project} />
    </Switch>
  );
}
