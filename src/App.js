import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Navigation from './components/navigation';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <div className="App">
    <Navigation>
       <Routes>
           <Route path='' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
       </Routes>
       </Navigation>
    </div>
    </Router>
  );
}

export default App;
