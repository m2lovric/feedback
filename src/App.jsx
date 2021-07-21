import './App.scss';
import Bug from './Components/Bug';
import Issue from './Components/Issue';
import Other from './Components/Other';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <h1 className='App__title'>Feedback</h1>

        <article className='feedback_window'>
          <header>
            <Link to='/bug'>
              <p>Bug</p>
            </Link>
            <Link to='/issue'>
              <p>Issue</p>
            </Link>
            <Link to='/other'>
              <p>Other</p>
            </Link>
          </header>
          <Route path='/bug' component={Bug} />
          <Route path='/issue' component={Issue} />
          <Route path='/other' component={Other} />
        </article>
      </Router>
    </div>
  );
}

export default App;
