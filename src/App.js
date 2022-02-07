
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import SigninPage from './components/SignupPage/SignupPage';
import SignupPage from './components/SignupPage/SignupPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = '/' element={<LandingPage />} />
        <Route path = 'signin' element={<SigninPage />} />
        <Route path = 'signup' element={<SignupPage />} />  
        <Route path = '/*' element={<LandingPage />} />  
          
      </Routes>
    </div>
  );
}

export default App;
