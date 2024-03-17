import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Assuming the path to your Card components
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
import { Link } from "react-router-dom";
import Topbar from "@/components/common/Topbar";

const user = localStorage.getItem("token");

const cardData = [
  {
    title: "Chat App",
    link: "mern-chat-app-indol.vercel.app/",
    description: "This is the second card.",
  },
  { title: "SOSC", link: "www.sosc.org.in/", description: "This is the second card." },
  {
    title: "Challenger",
    link: "teamchallengers.in/",
    description: "This is the third card.",
  },
  {
    title: "Car Pooling",
    description: "This is the fourth card.",
    link: "www.carwale.com",
  },
  { title: "Card 5", description: "Description for card 5" },
  { title: "Card 6", description: "Description for card 6" },
  { title: "Card 7", description: "Description for card 7" },
  { title: "Card 8", description: "Description for card 8" },
  { title: "Card 9", description: "Description for card 9" },
];

const Room = () => {
  return (
    <div>
      <Topbar />
      <div className="grid grid-cols-4 gap-4 py-5 m-4">
        {cardData.map((card, index) => (
          <Card key={index} className="shadow-md rounded-md overflow-hidden">
            <CardHeader>
              <CardTitle>
                {" "}
                <Avatar className="mb-2">
                  <AvatarImage
                    src={
                      card.link
                        ? `https://icon.horse/icon/${card.link}`
                        : `https://avatars.githubusercontent.com/u/109654387?v=4`
                    }
                    alt="organization logo"
                  />
                  <AvatarFallback>NO</AvatarFallback>
                </Avatar>
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {card.description}
                <br />
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                        />
                      </svg>
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to navigate away and redirect to{" "}
                        {card.title}?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>
                        <Link
                          to={`https://${card.link}`}
                          target="_blank"
                          onClick={() => {
                            document.cookie = `socialiteToken=${user}; domain=${`https://${card.link}`}; path=/`;
                            console.log("Cookie created successfully!");
                          }}
                        >
                          Continue
                        </Link>
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

export default Room;
