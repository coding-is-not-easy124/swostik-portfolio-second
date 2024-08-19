import React, { useEffect, useState } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Typewriter from './components/TypeWriter/TypeWriter';
import AboutMe from './components/AboutMe/AboutMe';
import { motion } from 'framer-motion'; 
import MyProjects from './components/Projects/MyProjects';
import Contact from './components/Contact/Contact';
import Form from './components/Form/Form';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: '#001f3f',
      width: 16,
      height: 16
    },
    text: {
      backgroundColor: '#f5f5f5',
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      width: 30,
      height: 30,
      mixBlendMode: 'difference'
    },
    navbar: {
      backgroundColor: '#ffffff',
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      width: 16,
      height: 16
    },
    navbarText: {
      backgroundColor: '#ffffff',
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      width: 40,
      height: 40,
      mixBlendMode: 'difference'
    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const navbarEnter = () => setCursorVariant("navbar");
  const navbarLeave = () => setCursorVariant("default");
  const navbarTextEnter = () => setCursorVariant("navbarText");
  const navbarTextLeave = () => setCursorVariant("navbar");

  return (
    <div className='app'>
      <Navbar
        onMouseEnterNavbar={navbarEnter}
        onMouseLeaveNavbar={navbarLeave}
        onMouseEnterText={navbarTextEnter}
        onMouseLeaveText={navbarTextLeave}
      />
      <motion.div
        variants={variants}
        className='cursor'
        animate={cursorVariant}
        transition={{ ease: "easeOut", duration: 0.2 }}
      />
       <section id="home">
         <Typewriter />
       </section>
       <section id="about">
         <AboutMe />
       </section>
       <section id="projects">
         <MyProjects />
       </section>
       <section id="contact">
         <Contact />
       </section>
       <Form/>
    </div>
  );
};

export default App;
