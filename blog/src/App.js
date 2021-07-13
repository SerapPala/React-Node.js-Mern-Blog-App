
//scss
import "./sass/main.scss"
//page-components
import Navbar from './components/Navbar';
import Login from './page/Login';
import Home from './page/Home';
import Register from './page/Register';
import Settings from './page/Settings';
import Single from './page/Single';
import Write from './page/Write';
//use
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useContext } from  'react';
import { Context } from  './context/Context';



function App() {
 const { user } = useContext(Context);
  return (
    <Router>
      <Navbar/>
        <Switch>
              <Route exact path="/">
               <Home/>
              </Route>
              
              <Route path="/register">{user ?  <Home />:<Register />} </Route>

              <Route path="/login">{user ?   <Home />:<Login />}</Route>

              <Route path="/write">{user ?   <Write />:<Register />}</Route>

              <Route path="/settings">{user ?   <Settings />:<Register />}</Route>

              <Route path="/post/:postId">
                <Single />
              </Route>
            
            </Switch>
  </Router>
  );
}

export default App;
