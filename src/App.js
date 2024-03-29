import './App.css';
import Navbar from './layouts/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PostPage from './pages/PostPage';
import PostForm from './pages/PostForm';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts/:id" element={<PostPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/post-form" element={<PostForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
