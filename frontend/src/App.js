import './App.css';
import {Switch, Link, Route} from 'react-router-dom';

import Background from './components/Background';
import AboutUs from './components/AboutUs'

function App() {
  return (
    <div>
    <Background/>

    <Switch>
      <Route exact path='/' render={(props)=><Background {...props}/>}/>
      <Route exact path='/about-us' render={(props)=><AboutUs {...props}/>}/>
    </Switch>
    </div>
  );
}

export default App;
