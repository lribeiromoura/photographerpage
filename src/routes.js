import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Photo from './pages/Photo';
import Videos from 'pages/Videos';
import Menu from './components/Menu';

export default function AppRouter() {
  return (
    <Router>
      <Menu />
      <Routes>    
        <Route path='/' element={<Home />}></Route>
        <Route path='/shows' element={<Photo />}></Route>
        <Route path='/videos' element={<Videos />}></Route>
      </Routes>
    </Router>
  );
}
