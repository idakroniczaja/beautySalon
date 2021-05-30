import {Switch, Link, Route} from 'react-router-dom';
import {useState, useRef} from 'react'




import Header from './components/Header';
import Content from './components/Content'



function App() {

  const [active, setActive] = useState(false);

  const changeToHome = useRef(null);
  const changeToAbout = useRef(null);
  const changeToContact = useRef(null);
  const changeToServices = useRef(null);
  console.log(changeToAbout, changeToHome, changeToContact, changeToServices)


const goToHome = () => window.scrollTo({top: changeToHome.current.offsetTop, behavior:'smooth'});
const goToAbout = () => window.scrollTo({top: changeToAbout.current.offsetTop, behavior:'smooth'});
const goToServices = () => window.scrollTo({top: changeToServices.current.offsetTop, behavior:'smooth'})
const goToContact = () => window.scrollTo({top: changeToContact.current.offsetTop, behavior:'smooth'});

// console.log(changeToServices.current.parentElement.className)


  return (
    <>
    <div className='App'>
    <Header active={active} setActive={setActive} goToHome={goToHome} goToAbout={goToAbout} goToServices={goToServices} goToContact={goToContact}/>
    <Content active={active} setActive={setActive} changeToHome={changeToHome} changeToAbout={changeToAbout} changeToServices={changeToServices} changeToContact={changeToContact}/> 
    </div>

    </>
  );
}

export default App;
