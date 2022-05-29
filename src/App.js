import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Star from './components/Star';
import CreatingQuiz from './components/CreatingQuiz';

function App() {
  return (
    <div>
      <BrowserRouter >
      <Routes >
        <Route  path='/' element={<Home/>}/>
        <Route  path='/product/:id' element={<Star/>} />
        <Route path='/quiz' element={<CreatingQuiz/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
