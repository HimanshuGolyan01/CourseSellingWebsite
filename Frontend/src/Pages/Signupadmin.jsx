import React from 'react'
import { Heading } from '../Components/Heading'
import { SubHeading } from '../Components/subHeading'
import { InputBox } from '../Components/Inputbox'
import { Button } from '../Components/Button'
import { BottomWarning } from '../Components/BottomWarning'



const Signupadmin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-2 border-gray-800">
        
   
          <Heading
          label={"Signup"}
          />

          <SubHeading
          label={"Enter Your Credential to start selling course"}
          />

          <InputBox
          label={"Enter Your Name"}
          placeholder={"ABC"}
          />

          <InputBox
          label={"Enter Your Email"}
          placeholder={"abc@gmail.com"}
          />

        <InputBox
        label={"Enter a strong password"}
        placeholder={"1234567890"}
        />

        <Button
        label={'Signup'}
        />

        <BottomWarning
        label={"Already have an account?"}
        buttonText={"Signin"}
        to={"/signinadmin"}
        />
      </div>
    </div>
  );
};



export default Signupadmin