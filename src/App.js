import './App.css';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Pages/Users/Users';
import Teams from './Pages/Teams/Teams';
import Projects from './Pages/Projects/Projects';
import Clients from './Pages/Clients/Clients';
import LoginSignUp from './Pages/Login&SignUp/LoginSignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<LoginSignUp/>}/>
        </Routes>
        <Sidebar>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/teams' element={<Teams/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/clients' element={<Clients/>}/>
          </Routes>
          </Sidebar>
      </BrowserRouter>

    </div>
  );
}

export default App;
