import { useState } from "react";
import AuthPage from "./authPage";
import ChatsPage from "./chatsPage";
import { Navigate } from "react-router-dom";

function Chat() {
  const [user, setUser] = useState();

  if (!user) {
    
    return <AuthPage onAuth={(user) => setUser(user)} />;

  } else {
    return <ChatsPage user={user} />;
  }
}

export default Chat;
