import React from 'react'
import { useState } from 'react'
import { Heading } from '../Components/Heading'
import { SubHeading } from '../Components/subHeading'
import { InputBox } from '../Components/Inputbox'
import { Button } from '../Components/Button'
import { BottomWarning } from '../Components/BottomWarning'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const Signupuser = () => {
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

     const navigate = useNavigate();

  async function signupHandler() {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signupuser" , {
        name : name,
        email : email,
        password : password
      })
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("name" , response.data.name)

      navigate("/UserHome")
    } catch (error) {
      console.log("Signup error" , error)
    }
  }


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
          onChange={(e) => setName(e.target.value)}
          label={"Enter Your Name"}
          placeholder={"ABC"}
          />

          <InputBox
          onChange={(e) => setEmail(e.target.value)}
          label={"Enter Your Email"}
          placeholder={"abc@gmail.com"}
          />

        <InputBox
        onChange={(e) => setPassword(e.target.value)}
        label={"Enter a strong password"}
        placeholder={"1234567890"}
        />

        <Button
        onClick={signupHandler}
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