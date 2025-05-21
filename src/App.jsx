import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/pages/signin';
import ErrorBoundary from './ErrorBoundary';
import Home from './components/pages/home';
import Signup from './components/pages/signup';



const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;



