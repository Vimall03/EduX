import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ marginTop: "10vh",height: "90vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username} // 
        secret={props.user.secret} // 
        style={{ height: "100%", background: "White" }}
      />
    </div>
  );
};

export default ChatsPage;
