import './App.css';
import Sidebar from './Components/Sidebar';
import { useNavigate } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Home/>

    </div>
  );
}

export default App;
