import './App.css';
import { Outlet } from 'react-router-dom';
import Navegation from './layout/Navegation';

function App() {
  return (
    <div className="App">
      <Navegation />
      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default App;
