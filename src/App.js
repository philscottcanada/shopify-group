import './App.scss';
import Nav from './components/Nav/Nav';
import NavLeft from './components/NavLeft/NavLeft';
import NavRight from './components/NavRight/NavRight';
import StoreSetup from './components/StoreSetup/StoreSetup';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main';

class App extends Component {
 
  
  render(){
    return (
      // <div className="app">
      <Router>
        <Nav />
        <div className="app">
        <NavLeft />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/store/" component={StoreSetup} />
          </Switch>
        <NavRight />
        </div>
      </Router>
    );
  }  
}
export default App;
