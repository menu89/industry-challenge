import './App.scss';
import SideNav from './components/SideNav/SideNav.js';
import TopNav from './components/TopNav/TopNav.js';
import { BrowserRouter, Route} from 'react-router-dom';
import Spotlight from './pages/Spotlight/Spotlight.js';
import Collaborators from './pages/Collaborators/Collaborators.js';

function App() {
  return (
    <div className="app">
      <SideNav />

      <div className='app__wrapper'>
        <TopNav />
        <BrowserRouter >
          <Route path="/" exact component={Spotlight} />
          <Route path="/board" component={Collaborators} />
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
