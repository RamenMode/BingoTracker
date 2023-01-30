import logo from './cooltext428473160330370_adobe_express_1.svg';
import './App.css';
import './Button.css'
import Home from "./Home.js"
import NotFound from "./NotFound"
import Boards from "./Boards"
import Cell from "./Cell.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Boards" element={<Boards/>}/>
          <Route exact path="/Cell" element={<Cell/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
  );
}

export default App;