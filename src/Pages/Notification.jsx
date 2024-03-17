import Topbar from "@/components/common/Topbar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";

const notificationData = [
  {
    title: "Chat App",
    description:
      "Stay up to date with the latest features on the Chat App! Explore new ways to enhance your communication experience.",
    link: "mern-chat-app-indol.vercel.app/",
  },
  {
    title: "SOSC",
    description:
      "Join SOSC's upcoming webinar on 'Tech Trends in 2024'. Engage with industry experts and expand your knowledge. Visit our website for registration.",
    link: "www.sosc.org.in/",
  },
  {
    title: "Chat App",
    link: "mern-chat-app-indol.vercel.app/",
    description:
      "Experience real-time chat with friends and colleagues using the Chat App. Connect seamlessly and share your thoughts effortlessly.",
  },
  {
    title: "SOSC",
    link: "www.sosc.org.in/",
    description: "Explore our initiatives and contribute to the community.",
  },
  {
    title: "Challenger",
    link: "teamchallengers.in/",
    description:
      "Join Team Challengers for exciting coding competitions and hackathons. Showcase your skills and be part of a passionate coding community.",
  },
];

const Notification = () => {
  return (
    <div>
      <Topbar />
      <div className="grid grid-cols-1 gap-4 py-5 m-4">
        {notificationData.map((notification, index) => (
          <Card key={index} className="shadow-md rounded-md overflow-hidden">
            <CardHeader>
              <CardTitle>
                <Avatar className="mb-2">
                  <AvatarImage
                    src={`https://icon.horse/icon/${notification.link}`} // Replace with actual icon URL
                    alt="notification icon"
                  />
                  <AvatarFallback>NO</AvatarFallback>
                </Avatar>
                {notification.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {notification.description}
                <br />
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="mt-2">check notifications</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to take action related to{" "}
                        {notification.title}?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>
                        <button
                          onClick={() => console.log("Notification action clicked")}
                        >
                          Continue
                        </button>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardDescription>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notification;
