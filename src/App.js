import React from 'react';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Register from './pages/Register.jsx'; 
import Footer from './components/Footer.jsx';
import { ThemeProvider } from './components/ThemeContext.jsx';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import FloatingWhatsApp from './components/FloatingWhatsApp'; // تأكد من استيراد FloatingWhatsApp

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <TransitionGroup>
          <CSSTransition timeout={1000} classNames="page" key={window.location.pathname}>
            <div className="transition-container">
              <Routes>
                {/* الصفحة الرئيسية */}
                <Route path="/" element={<Home />} /> 
                {/* مسار غير معروف: إعادة التوجيه إلى الصفحة الرئيسية */}
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
        <FloatingWhatsApp /> 
      </Router>
    </ThemeProvider>
  );
};

export default App;
