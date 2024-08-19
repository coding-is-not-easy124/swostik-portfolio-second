import React from 'react'
import './MyProjects.css'
import MySkills from '../My Skills/MySkills'

const MyProjects = () => {
  return (
    <div className='my-projects'>
      <h1 className='my-projects-heading'>My Projects And Services</h1>
      <div className='services-section'>
        <h2>Services</h2>
        <div className='services'>
          <div>
            <h3>Web Development</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vitae dolorem reiciendis veniam quos omnis quidem quibusdam sapiente, reprehenderit quisquam ratione maxime perspiciatis dolorum quasi.</p>
            <p><b>Skills:</b> HTML, CSS, JavaScript, Tailwind, Bootstrap, NextJS, TypeScript, React, MongoDB, NodeJS</p>
          </div>
          <div>
            <h3>Coding</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vitae dolorem reiciendis veniam quos omnis quidem quibusdam sapiente, reprehenderit quisquam ratione maxime perspiciatis dolorum quasi.</p>
            <p><b>Skills:</b> C++, Java, C</p>
          </div>
          <div>
            <h3>Devops</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vitae dolorem reiciendis veniam quos omnis quidem quibusdam sapiente, reprehenderit quisquam ratione maxime perspiciatis dolorum quasi.</p>
            <p><b>Skills:</b> AWS, Terraform, Shell Scripting, CI/CD</p>
          </div>
        </div>
      </div>
      <div className="projects-section">
        <h3>Here are some of my projects:</h3>
        <div className='projects'>
          <div>
            <img src="src/images/portfolio/portfolio-1.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim iure dolor? Quia non dolores, aut delectus libero mollitia dolorum.</p>
          </div>
          <div>
            <img src="src/images/portfolio/portfolio-2.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim iure dolor? Quia non dolores, aut delectus libero mollitia dolorum.</p>
          </div>
          <div>
            <img src="src/images/portfolio/portfolio-3.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim iure dolor? Quia non dolores, aut delectus libero mollitia dolorum.</p>
          </div>
          <div>
            <img src="src/images/portfolio/portfolio-4.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim iure dolor? Quia non dolores, aut delectus libero mollitia dolorum.</p>
          </div>
          <div>
            <img src="src/images/portfolio/portfolio-5.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim iure dolor? Quia non dolores, aut delectus libero mollitia dolorum.</p>
          </div>
          <div>
            <img src="src/images/portfolio/portfolio-6.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim iure dolor? Quia non dolores, aut delectus libero mollitia dolorum.</p>
          </div>
        </div>
      </div>
      <MySkills/> 
    </div>
  )
}

export default MyProjects
