import React from 'react'
import { Heading } from '../Components/Heading'
import { SubHeading } from '../Components/subHeading'
import { InputBox } from '../Components/Inputbox'
import { Button } from '../Components/Button'
import { BottomWarning } from '../Components/BottomWarning'



const Signupuser = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-2 border-gray-800">
        
   
          <Heading
          label={"Signup"}
          />

          <SubHeading
          label={"Enter Your Credential to start learning"}
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
        to={"/signinuser"}
        />
      </div>
    </div>
  );
};



export default Signupuser