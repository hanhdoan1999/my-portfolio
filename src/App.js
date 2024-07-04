
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import AddBlog from './pages/AddBlog';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<Blogs/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/blog/:id" element={<BlogDetail/>} />
          <Route path="/add-blog/" element={<AddBlog/>} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/project" element={<ListProject/>} /> */}
        </Routes>
    </Router>
  );
}

export default App;
