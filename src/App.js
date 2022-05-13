import './App.scss';
import SideNav from './components/SideNav/SideNav.js';
import TopNav from './components/TopNav/TopNav.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router';
import Spotlight from './pages/Spotlight/Spotlight.js';
import Collaborators from './pages/Collaborators/Collaborators.js';

function App() {
  return (
    <div className="app">
      <SideNav />

      <div className='app__wrapper'>
        <TopNav />
        <Spotlight />
        <Collaborators />
      </div>
    </div>
  );
}

export default App;
