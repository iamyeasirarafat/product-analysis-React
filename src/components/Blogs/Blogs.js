import React from 'react';
import Nav from '../Nav/Nav';

const Blogs = () => {
    return (
        <div className="">
            <Nav></Nav>
            <h2 className="text-5xl font-semibold text-center my-9 uppercase text-blue-500">Welcome to my <span className="text-pink-400">Blogs</span></h2>
            <div className="md:flex w-3/4 mx-auto">
            <div className="w-2/5  mr-20 mt-16 mb-28">
                <img className="w-11/12 m-auto rounded-lg" src='context.png'alt="" />
            </div>
            <div className="w-3/5 mt-10">
                <h3 className="text-3xl font-semibold text-blue-800">What is <span className="text-pink-400">Context API</span> and how it works?</h3>
                <p className="ml-10 my-3 text-blue-400"><small>Posted By: Yeasir Arafat</small></p>
                <p className="text-blue-600">
                    Context Api is a new method added in react 16.3 . It allow to pass data or state to the Whole react app. Its a alternative version or Prop Drilling. Its a Easy process and lighter way to state management using redux. Through the context API we can pass a global Data to the whole react app.
                    Let's have a Example. IF we want to build a website and want to toggle the theme to dark or light mood for our react app. Every component has to have access to the current theme mode so they can be styled. But its only possible with state managements and if we want to pass the state through props that will very difficult and its a very lengthy process. Here we can use ConText Api.  
                </p>
                
            </div>
        </div>
            <div className="md:flex w-3/4 mx-auto">
            <div className="w-2/5  mr-20 mt-16 mb-28">
                <img className="w-11/12 m-auto rounded-lg" src='semantic.jpg'alt="" />
            </div>
            <div className="w-3/5 mt-10">
                <h3 className="text-3xl font-semibold text-blue-800">What is <span className="text-pink-400">Semantic Tags</span> ?</h3>
                <p className="ml-10 my-3 text-blue-400"><small>Posted By: Yeasir Arafat</small></p>
                <p className="text-blue-600">
                      
                </p>
                
            </div>
        </div>
        </div>
    );
};

export default Blogs;