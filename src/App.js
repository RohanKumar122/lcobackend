import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/UI/Dashboard';
import LoginPage from './Components/UI/LoginPage';
import RegistrationPage from './Components/UI/RegistrationPage';
import CreateUser from './Components/UI/CreateUser';
import Home from './Components/UI/Home';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='dashboard/' element={<Dashboard/>}/>
        <Route path='login/' element={<LoginPage/>}/>
        <Route path='register/' element={<RegistrationPage/>}/>
        <Route path='createuser/' element={<CreateUser/>}/>

      </Routes>
    </div>
  );
}

export default App;
