
import './AboutSection.css';
import { Routes, Route } from 'react-router-dom';
import Signin from '../SignupPage/SignupPage';

function AboutPage() {
  return (
    <div>
      <p>hi</p>
        <Routes>
          <Route path=':id/there' element={<Signin />}></Route>
        </Routes>
    </div>
  );
}

export default AboutPage;
