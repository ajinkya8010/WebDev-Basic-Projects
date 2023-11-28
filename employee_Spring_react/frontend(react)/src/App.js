import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Navbar } from './layout/navbar';
import { Home } from './pages/Home';
import { View } from './pages/viewemployee';
import { Remove } from './pages/remove';
import { Add } from './pages/addemployee';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/view" element={<View/>}></Route>
        <Route path="/remove" element={<Remove/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
