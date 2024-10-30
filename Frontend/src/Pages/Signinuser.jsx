import React, { useState } from 'react';
import { Heading } from '../Components/Heading';
import { SubHeading } from '../Components/SubHeading';
import { InputBox } from '../Components/InputBox';
import { Button } from '../Components/Button';
import { BottomWarning } from '../Components/BottomWarning';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signinuser = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signinHandler() {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signinuser", {
                email: email,
                password: password
            });
            localStorage.setItem("token", response.data.token);
            navigate("/UserHome");
        } catch (error) {
            console.error("Error signing in:", error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-2 border-gray-800">
                <Heading label={"Signin"} />
                <SubHeading label={"Enter Your Credential to start learning"} />
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
                <Button onClick={signinHandler} label={'Signin'} />
                <BottomWarning
                    label={"Already have an account?"}
                    buttonText={"Signup"}
                    to={"/signupuser"}
                />
            </div>
        </div>
    );
};

export default Signinuser;
