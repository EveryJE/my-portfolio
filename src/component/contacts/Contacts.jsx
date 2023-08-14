import { useEffect, useState } from "react";
import "./contacts.scss";
import axios from 'axios'


export const Contacts = ({section}) => {
  const [message, setMessage] = useState(false);
  const [tempMessage, setTempMessage] = useState(null);
  const [typedMessage, setTypedMessage] = useState(null);
  const [isSent, setIsSent] = useState(false);
const [email,setEmail]=useState('');

  const onSubmit = () => {
 
    if (tempMessage) {
      setIsSent(true);
      setMessage(true);
      axios
      .post('/send-email', { email, message })
      .then((response) => {
        console.log(response.data);
        setIsSent(true);
      })
      .catch((error) => {
        console.error(error);
        setIsSent(false);
      });
      return setTypedMessage("Thank you🤝🏿 , I will reply ASAP😎");
   
    } else {
      setIsSent(false);
      return setTypedMessage("No message typed yet 🧗🏾‍♀️");
    }
    
  };

  return (
    <>
      <div className={"contacts " +section} id="contacts">
        <div className="container"  >
          <div className="left">
            <img src="docs/contactImage.png" />
          </div>
         <div className="right" >
            <form
              onSubmit={(e) => {
                return e.preventDefault();
              }}
            >
              <h1>Contact</h1>
              <input placeholder="Email" type="email" />
              <textarea
                placeholder="message here✍🏾"
                onChange={(e) => setTempMessage(e.target.value)}
              />
              <button type="submit" onClick={onSubmit}>
                Send
              </button>
              {message && (
                <h3 className={isSent && "success"} >{typedMessage}</h3>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
