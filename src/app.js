import { ChatEngine } from 'react-chat-engine';
import './app.css';
import ChatFeed from './components/ChatFeed'
const app = () =>
{
  return(
    <ChatEngine
      height= "100vh"
      projectID= "edd6d097-e2ef-41de-9368-dc190ec69b70"
      userName="sxmxr"
      userSecret="samarth0411"
      renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
    />
  )
}

export default app;