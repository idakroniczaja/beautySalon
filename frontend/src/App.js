import {Switch, Link, Route} from 'react-router-dom';



import Background from './components/Background';
import Header from './components/Header';
import Content from './components/Content'

function App() {
  return (
    <div className='App'>
    <Header/>
    <Content/>
    </div>
  );
}

export default App;
