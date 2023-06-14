import './App.css';
import { Outlet } from 'react-router-dom';
import Navegation from './layout/Navegation';

function App() {
  return (
    <div className="App">
      <Navegation />
      <Outlet />
    </div>
  );
}

export default App;
