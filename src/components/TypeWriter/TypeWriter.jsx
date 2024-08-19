import React, { useState, useEffect } from 'react';
import './TypeWriter.css'; 

const Typewriter = () => {
  const texts = ['Full Stack Developer', 'Coder', 'DevOps Enthusiast'];
  const [text, setText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentTextIndex];
      if (isDeleting) {
        setText(currentText.substring(0, text.length - 1));
      } else {
        setText(currentText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const typingInterval = setInterval(handleTyping, 150);

    return () => clearInterval(typingInterval);
  }, [text, isDeleting, currentTextIndex]);

  return (
    <div className="typewriter-container">
      <div>
        <p className="para">
          Hi, I am <span>Swostik.</span>
        </p>
        <b className="typewriter-text">I am a {text}</b>  
      </div>
      <p style={{fontSize:"20px"}}>
        I am a Full-Stack Web Developer who is currently studying Information Technology in OUTR. I also have
        interest in DevOps and I also love Coding. I generally design websites using React and Next.js.
      </p>
      <button className="more-about-me-button">More About Me</button>
    </div>
  );
};

export default Typewriter;
