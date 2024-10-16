import React from 'react'
import Card from './Card'


const About = () => {
  return (
    <div>
      <div>
        <h1 className='font-rubik text-5xl justify-center font-bold mt-[10rem] text-center bg-gradient-to-br from-gray-700 via-gray-500 to-white bg-clip-text text-transparent '>Connecting Teachers and Learners for <br />Lifelong Success.</h1>
        <Card
        title={"Empowering Educators"}
        description={"Our platform allows educators to create and share courses with ease, reaching learners globally."}
        />
        <Card
        title={"Secure Transaction"}
        description={"With secure payment gateways, we ensure a safe and smooth financial experience for both educators and learners."}
        />
        <Card
        title={"Real-Time Feedback"}
        description={"Learners can engage with instructors and receive real-time feedback to enhance their learning experience."}
        />
        <Card
        title={"Secure Transactions"}
        description={"With secure payment gateways, we ensure a safe and smooth financial experience for both educators and learners."}
        />

      </div>
    </div>
  )
}

export default About
