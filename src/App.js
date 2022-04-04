import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Reviews from './components/Reviews/Reviews';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element = {<Home></Home>}></Route>
        <Route path="/home" element = {<Home></Home>}></Route>
        <Route path="/reviews" element = {<Reviews></Reviews>}></Route>
        <Route path = '*' element = {<PageNotFound></PageNotFound>}></Route>
        
      </Routes>
     
    </div>
  );
}

export default App;
