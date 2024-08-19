import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
return (
  <div className='about-me'> 
    <h1 className='main-heading'>About Me</h1>
    <h2 className='heading-2'>I'm Swostik Mishra and I am a Web Developer</h2>
    <p className='info'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae eligendi dicta necessitatibus sit suscipit doloremque aperiam quasi voluptatem odio alias ea, at quis ullam consequatur tempore recusandae debitis totam natus dolor consequuntur sunt omnis nisi. Blanditiis iste rerum vero iusto, explicabo quasi voluptas aperiam debitis sequi commodi, molestias ipsam.</p>
    <div className='main-info'>
     <div>    
      <p>Birthday: 11 September 2004</p>
      <hr />
      <p>Website: www.swostikmishra.com</p>
      <hr />
      <p>Degree: IT</p>
      <hr />
      <p>City: Bhubaneswar</p>
      <hr />
     </div>
     <div> 
      <p>Age: 20</p>
      <hr />
      <p>Email: swostikmishra9@gmail.com</p>
      <hr />
      <p>Phone: +91 8926090021</p>
      <hr />
      <p>Free For Work: Available</p>
      <hr />
     </div>
    </div> 
    <button className='download-cv'>Download CV</button>
    <button className='contact-me'>Contact Me</button>
    <div className="education">
      <h2>Education</h2>
      <div className='main-education'>
       <div> 
        <b>Primary Education</b>
        <p>2010-2020</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, totam accusamus. Ut, deserunt tempore, non culpa magnam quia, hic modi quod neque eius sit esse quidem. Eveniet a dignissimos adipisci.</p>
       </div>
       <div> 
        <b>Secondary Education</b>
        <p>2020-2022</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime architecto sunt ea voluptatibus ullam dolor! Culpa voluptatum provident excepturi exercitationem tenetur facere, consectetur assumenda doloribus sint, autem iure eius nemo.</p>
       </div>
       <div> 
        <b>Bachelors in Information Technology</b>
        <p>2022-2026</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero atque blanditiis, modi assumenda dolore ut dolor dignissimos, nulla aspernatur voluptates explicabo soluta. Quia autem voluptatem dolor. Repellendus necessitatibus tenetur nisi?</p>
       </div> 
      </div> 
    </div>
    <div className="achievements">
      <h1>Achievements</h1>
      <div className="main-achievements">
         <div>
            <b>LeetCode</b>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quos consequuntur deserunt laudantium, corrupti praesentium assumenda eum reiciendis animi minima?</p>
         </div>
         <div>
            <b>Codechef</b>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quos consequuntur deserunt laudantium, corrupti praesentium assumenda eum reiciendis animi minima?</p>
         </div>
         <div>
            <b>Coding Ninjas</b>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quos consequuntur deserunt laudantium, corrupti praesentium assumenda eum reiciendis animi minima?</p>
         </div>
      </div> 
    </div>
  </div>
)
}

export default AboutMe

