import { userState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
const messageForm = (props) => {
  const [value, setValue] = userState('');
  const { chatID, creds } = props;

  const handleSubmit = (event) => {
      event.preventDefault();

      const text = value.trim();

      if(text.length > 0) sendMessage(creds, chatID, {text});
  }
  const handleChange = (event) => {
      setValue(event.target.value);
      isTyping(props, chatID);
  }
  return(
    <from className="message-form" onSubmit={handleSubmit}>
<input 
  className="message-input"
  placeholder="Send a message... "
  value={value}
  onChange = {handleChange}
  onSubmit={handleSubmit}
/>
    </from>
  )
}

export default messageForm;