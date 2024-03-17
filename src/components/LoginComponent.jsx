import React, { useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import socialiteLogo from "../assets/socialiteLogo.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In to Linkedin!");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Please Check your Credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="max-w-md mx-auto p-6 rounded-md shadow-md">
        <img src={socialiteLogo} alt="Socialite Logo" className="w-16 h-16 mx-auto" />

        <div className="text-center">
          <h1 className="text-2xl font-bold">Sign in</h1>
          <p className="text-gray-600">Stay updated on your professional world</p>
        </div>

        <div className="mt-4">
          <Input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            placeholder="Email or Phone"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-white"
          />
          <Input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            placeholder="Password"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-white"
          />
        </div>

        <Button
          onClick={login}
          className="w-full bg-white text-black p-2 rounded-md hover:bg-gray-800 focus:outline-none"
        >
          Sign in
        </Button>

        <div className="text-center">
          <p>
            New to SociaLite?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-gray-500 cursor-pointer"
            >
              Join now
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
}
