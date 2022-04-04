import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element = {<Home></Home>}></Route>
        <Route path="/home" element = {<Home></Home>}></Route>
        <Route path="/nothing" element = {<Reviews></Reviews>}></Route>
        
      </Routes>
     
    </div>
  );
}

export default App;
