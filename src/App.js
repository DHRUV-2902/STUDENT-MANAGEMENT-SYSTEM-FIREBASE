import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Create from './Components/Create';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="*" element={<Home/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
