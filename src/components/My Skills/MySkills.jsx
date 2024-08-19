import React from 'react'
import AWSS3Icon from '../../icons/AWSS3Icon'
import AWSIcon from '../../icons/AWSIcon'
import AWSDynamoDB from '../../icons/AWSDynamoDB'
import AWSEC2 from '../../icons/AWSEC2'
import AWSRoute53 from '../../icons/AWSRoute53'
import CSS from '../../icons/CSS'
import HTML from '../../icons/HTML'
import NextJS from '../../icons/NextJS'
import NodeJS from '../../icons/NodeJS'
import ReactJS from '../../icons/ReactJS'
import './MySkills.css'
import CPlusPlus from '../../icons/CPlusPlus'
import JavaScript from '../../icons/JavaScript'
import GitHub from '../../icons/GitHub'
import Tailwind from '../../icons/Tailwind'
import Terraform from '../../icons/Terraform'


const MySkills = () => {
  return (
      <div className="my-skills">
        <h1>My Skills:</h1>
        <div className="icons">
          <div className="icon"><AWSS3Icon/></div>
          <div className="icon"><AWSIcon/></div>
          <div className="icon"><AWSDynamoDB/></div>
          <div className="icon"><AWSEC2/></div>
          <div className="icon"><AWSRoute53/></div>
          <div className="icon"><CSS/></div>
          <div className="icon"><HTML/></div>
          <div className="icon"><NextJS/></div>
          <div className="icon"><NodeJS/></div>
          <div className="icon"><ReactJS/></div>
          <div className="icon"><CPlusPlus/></div>
          <div className="icon"><JavaScript/></div>
          <div className="icon"><GitHub/></div>
          <div className="icon"><Tailwind/></div>
          <div className="icon"><Terraform/></div>
        </div> 
      </div>
  )
}

export default MySkills
