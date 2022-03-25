import './App.scss';
import Nav from './components/Nav/Nav';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
 
  
  render(){
    return (
        <Router>
            <Nav />
            <Switch>
              {/* <Route path='/' exact component={Home} /> */}
              {/* <Route path='/home/' component={Home} /> */}
              
            </Switch>
        </Router>
    );
  }  
}
export default App;
