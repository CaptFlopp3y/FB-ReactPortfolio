import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/contactPage';
import HomePage from './pages/homePage';
import ProjectPage from './pages/projectPage';
import AppNavbar from "./components/appNavbar";
import AppFooter from "./components/appFooter";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/contactme' element={<ContactPage />} />
        <Route exact path='/projects' element={<ProjectPage />} />
        <Route path='*' element={<h1 className='display-2'>Wrong page!</h1>} />
      </Routes>
      <AppFooter />
    </Router>
  );
}

export default App;
