
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import AddBlog from './pages/AddBlog';
import Projects from './pages/Projects';
import AddProjects from './pages/AddProjects';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './pages/Contact';
import Header from './components/Header/Header';
import ScrollToSection from './components/ScrollToSection/ScrollToSection';
import { useState } from 'react';
import ContactPage from './pages/ContactPage';

function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/my-portfolio" element={<Home/>} /> */}
          <Route path="/blog" element={<Blogs/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/blog/:id" element={<BlogDetail/>} />
          <Route path="/add-blog" element={<AddBlog/>} />
          <Route path="/add-project" element={<AddProjects/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
    <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
