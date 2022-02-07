import './LandingPage.css';
import Header from  '../Header/Header';
import AboutSection from '../AboutSection/AboutSection'
import {Routes, Route} from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import ContactSection from '../ContactSection/ContactSection';

function LandingPage() {
  return (
    <div className="landing">
      <div className='header_outer'>
        <Header></Header>
      </div>
      <div className = "body_outer">
        <Routes>
          <Route path = 'about' element={<AboutSection />} />
          <Route path = 'contact' element={<ContactSection />} />
          <Route path = '*' element={<ErrorPage />} />
        </Routes>
      </div>
      <div className='footer'></div>
      

    </div>
  );
}

export default LandingPage;
