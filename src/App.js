import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Error from './components/Error';
import Viewitem from './components/Viewitem';
import Createpost from './components/Createpost';
import Login from './components/Login';
import User from './components/User';
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' >
        <Home />
      </Route>
      <Route exact path='/login' >
        <Login />
      </Route>
      <Route exact path='/user' >
        <User />
      </Route>
      <Route exact path='/createpost' >
        <Createpost />
      </Route>
      <Route  path='/posts/:id' >
        <Viewitem />
      </Route>
      <Route  path='*' >
        <Error />
      </Route>
      
    </Switch> 
    </Router>
  );
}

export default App;
