import React, { useEffect, useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { getConnections } from "../../../api/FirestoreAPI";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ConnectedUsers({ user, getCurrentUser, currentUser }) {
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    getConnections(currentUser.id, user.id, setIsConnected);
  }, [currentUser.id, user.id]);
  return isConnected ? (
    <></>
  ) : (
    <div>
      <div className="grid grid-cols-4 gap-4 py-2 m-4">
        <Card className="shadow-md rounded-md overflow-hidden">
          <CardHeader>
            <CardTitle>
              <Avatar className="mb-2">
                <AvatarImage src={user.imageLink} alt="organization logo" />
                <AvatarFallback>NO</AvatarFallback>
              </Avatar>
              {user.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              {user.headline}
              <br />
            </CardDescription>
          </CardContent>

          <CardFooter>
            <Button onClick={() => getCurrentUser(user.id)}>
              <AiOutlineUsergroupAdd size={20} />
              Connect
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
