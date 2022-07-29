import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Navigation from './components/navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/faq';
import Home from './pages/Home';
import Strategy from './pages/Strategy';

function App() {
  return (
    <Router>
    <div className="App">
    <Navigation>
       <Routes>
           <Route path='' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/strat' element={<Strategy/>}/>
           <Route path='/faq' element={<Faq/>}/>
       </Routes>
       </Navigation>
    </div>
    </Router>
  );
}

export default App;
