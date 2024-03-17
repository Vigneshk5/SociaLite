import React, { useState } from "react";
import { RegisterAPI } from "../api/AuthAPI";
import { postUserData } from "../api/FirestoreAPI";
import socialiteLogo from "../assets/socialiteLogo.png";
import { useNavigate } from "react-router-dom";
import { getUniqueID } from "../helpers/getUniqueId";
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
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";

export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);
      toast.success("Account Created!");
      postUserData({
        userID: getUniqueID(),
        name: credentails.name,
        email: credentails.email,
        imageLink: "https://xsgames.co/randomusers/avatar.php?g=pixel",
      });
      navigate("/home");
      localStorage.setItem("userEmail", res.user.email);
    } catch (err) {
      console.log(err);
      toast.error("Cannot Create your Account");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="max-w-md mx-auto mt-10 rounded-md shadow-md overflow-hidden">
        <CardHeader className="mb-6">
          <img src={socialiteLogo} alt="socialiteLogo" className="w-16 h-16 mx-auto" />
          <CardTitle>
            <h1 className="text-2xl font-bold text-center">
              Make the most of your professional life
            </h1>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="mb-4">
            <Label>Your Name</Label>
            <Input
              type="text"
              onChange={(event) =>
                setCredentials({ ...credentails, name: event.target.value })
              }
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-white"
            />
          </div>

          <div className="mb-4">
            <Label>Email or phone number</Label>
            <Input
              type="email"
              onChange={(event) =>
                setCredentials({ ...credentails, email: event.target.value })
              }
              placeholder="Email or phone number"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-white"
            />
          </div>

          <div className="mb-4">
            <Label>Password (6 or more characters)</Label>
            <Input
              type="password"
              onChange={(event) =>
                setCredentials({ ...credentails, password: event.target.value })
              }
              placeholder="Password (6 or more characters)"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-white"
            />
          </div>

          <Button
            onClick={register}
            className="w-full bg-white text-black p-2 rounded-md hover:bg-gray-800 focus:outline-none"
          >
            Agree & Join
          </Button>
        </CardContent>

        <CardFooter className="mt-6">
          <div className="text-center">
            <p>
              Already on SociaLite?{" "}
              <span
                onClick={() => navigate("/")}
                className="text-gray-500 cursor-pointer"
              >
                Sign in
              </span>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
