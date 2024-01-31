import CompMessage from "./CompMessage";
import axios from "axios";
import { useEffect, useState } from "react";
import { Url } from "../resources/Url";

const CompMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get(`${Url}/messages`)
      .then((res) => {
        setMessages(res.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [messages]);
  return (
    <>
      {messages.map((message, index) => (
        <CompMessage
          key={index}
          username={message.sender}
          content={message.content}
          date={message.createdAt}
        />
      ))}
    </>
  );
};

export default CompMessages;
