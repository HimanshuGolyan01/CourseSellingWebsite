import React, { useState } from 'react';
import { Heading } from '../Components/Heading';
import { SubHeading } from '../Components/subHeading';
import { InputBox } from '../Components/Inputbox';
import { Button } from '../Components/Button';
import { BottomWarning } from '../Components/BottomWarning';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signinadmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function signinhandler() {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/admin/signinadmin" ,{
        email : email,
        password : password
      });
      localStorage.setItem("token", response.data.token);
      navigate("/AdminHome");
    } catch (error) {
      console.log("Signin error", error.response ? error.response.data : error.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-2 border-gray-800">
        <Heading label={"Signin"} />
        <SubHeading label={"Enter Your Credential to start selling your course"} />
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
        <Button onClick={signinhandler} label={'Signin'} />
        <BottomWarning
          label={"Don't have an account?"}
          buttonText={"Signup"}
          to={"/signupadmin"}
        />
      </div>
    </div>
  );
};

export default Signinadmin;
