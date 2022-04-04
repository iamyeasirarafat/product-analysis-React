import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Dashboard from './components/Dashboard/Dashboard';
import Reviews from './components/Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element = {<Home></Home>}></Route>
        <Route path="/home" element = {<Home></Home>}></Route>
        <Route path="/reviews" element = {<Reviews></Reviews>}></Route>
        <Route path = "/dashboard" element = {<Dashboard></Dashboard>}></Route>
        <Route path = "/blogs" element = {<Blogs></Blogs>}></Route>
        <Route path = "/about" element = {<About></About>}></Route>
        <Route path = '*' element = {<PageNotFound></PageNotFound>}></Route>
        
      </Routes>
     
    </div>
  );
}

export default App;
