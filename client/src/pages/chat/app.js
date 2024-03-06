import { useState } from "react";

import AuthPage from "./authPage";
import ChatsPage from "./chatsPage";

function Chat(props) {
  const [user, setUser] = useState();

  if (!user) {
    return <AuthPage userData={props.userData} onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default Chat;
