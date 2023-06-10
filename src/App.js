import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
    
  );
}

export default App;
