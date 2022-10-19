import About from 'pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
import Photo from './pages/Photo';
import Videos from 'pages/Videos';

export default function AppRouter() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shows' element={<Photo />}></Route>
        <Route path='/videos' element={<Videos />}></Route>
        <Route path='/ensaios' element={<Photo />}></Route>
        <Route path='/lifestyle' element={<Photo />}></Route>
        <Route path='/loja' element={<Photo />}></Route>
        <Route path='/sobre' element={<About />}></Route>
      </Routes>
    </Router>
  );
}
