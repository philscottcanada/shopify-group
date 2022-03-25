import './App.scss';
import Nav from './components/Nav/Nav';
import NavLeft from './components/NavLeft/NavLeft';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main';

class App extends Component {
 
  
  render(){
    return (
        <Router>
        <Nav />
        <NavLeft />
            <Switch>
              {/* <Route path='/' exact component={Main} /> */}
              {/* <Route path='/home/' component={Home} /> */}
              
            </Switch>
        </Router>
    );
  }  
}
export default App;
