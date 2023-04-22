import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "context/UserContext";
import BoldEllipisIcon from "components/Icons/Bold/ellipis";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Chat = ({ contact, socket }) => {
  useEffect(() => {
    console.log("Chat component is runningg,,,,,,,,");
  });
  // using the context for getting the current logged in user
  const { profile, setLoginStatus } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  //function for handling errors
  const handleErrors = (err) => {
    Swal.fire({
      icon: "error",
      text: err.response.data.error,
    });

    if (err.response.data.name === "AuthenticationError") {
      setLoginStatus(false);
      navigate("/login");
    }
  };

  // for getting all messages from server
  const getMsg = async () => {
    try {
      const resp = await axios.post(
        "http://localhost:4000/chat/getMessage",
        {
          from: profile.id,
          to: contact.id,
        },
        {
          withCredentials: true,
        }
      );
      // console.log("response from chat.... : ", resp);
      setMessages(resp.data.data);
      // Array : [createdAt,message,updatedAt, patientSender/ doctorSender]
    } catch (err) {
      console.log("error in getting the chat message : ", err);
      handleErrors(err);
    }
  };

  useEffect(() => {
    //getting the messages from the server
    if (contact !== null) {
      getMsg();
    }
  }, [contact]);

  //for sending the message to the server
  const sendMsg = async (message) => {
    try {
      console.log("msg : ", message);
      if (message.trim().length === 0) {
        Swal.fire({
          icon: "error",
          text: "cannot send empty messages!",
        });
        return;
      }

      //api request to send the message
      await axios.post(
        "http://localhost:4000/chat/sendMessage",
        {
          message: message,
          from: profile.id,
          to: contact.id,
        },
        {
          withCredentials: true,
        }
      );

      //emitting the send message event to the server
      socket.current.emit("send-msg", {
        from: profile.id,
        to: contact.id,
        message: message,
      });

      //append the new messages into the message state
      let msgs = [...messages];
      let sendmsg = {};
      sendmsg["message"] = message;
      sendmsg["updatedAt"] = null;
      if (profile.type === "Doctor") sendmsg["doctorSender"] = profile.id;
      else sendmsg["patientSender"] = profile.id;
      msgs.push(sendmsg);
      setMessages(msgs);
    } catch (err) {
      console.log("error in sending the chat message : ", err);
      handleErrors(err);
    }
  };

  // useffect for listening the any recieved messages from the server
  useEffect(() => {
    if (socket.current) {
      console.log("socket current is working");
      socket.current.on("msg-receive", (msg) => {
        setMessages((messages) => {
          return [
            ...messages,
            {
              doctorSender: null,
              patientSender: null,
              message: msg,
            },
          ];
        });
      });
    }
  }, [contact]);

  return (
    <div className="w-full flex flex-row font-body-primary">
      <div className="flex-grow h-screen flex flex-col bg-black">
        {/* if no contact is selected render a different div  */}
        {contact === null ? (
          <div className="h-[100%] w-[100%] flex justify-center items-center">
            <div className="text-white">
              Please select one contact for viewing the chats...
            </div>
          </div>
        ) : (
          <>
            {/* if the contact is selected, render the chats  */}
            {/* chat navbar  */}
            <div className="w-full h-14 flex justify-between bg-gray-800">
              <div className="flex items-center">
                {/* profile pic */}
                <div className="p-2 mt-2">
                  <img className="w-10 h-10 rounded-full" src={contact.image} />
                  <div className="flex justify-center items-center w-3 h-3 relative left-6 bottom-3 bg-white rounded-full">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                </div>
                <div className="p-3 text-white">
                  {/* name */}
                  <div className="text-md">{contact.name}</div>
                </div>
              </div>
              <div className="flex items-center mr-10">
                <BoldEllipisIcon size="30" color="#4b5563" />
              </div>
            </div>

            {/* chat body and messages  */}
            <div className="w-full flex-grow bg-gray-600 overflow-y-scroll">
              {messages.length === 0 ? (
                <div className="text-gray-200 text-center my-4">
                  Please start the conversation....
                </div>
              ) : (
                <>
                  {messages.map((msg) => {
                    if (
                      profile.type === "Doctor" &&
                      profile.id === msg.doctorSender
                    ) {
                      {
                        /* right side */
                      }
                      return (
                        <div className="flex justify-end">
                          <ChatMessage
                            msg={msg.message}
                            time={msg.updatedAt}
                            self={true}
                          />
                        </div>
                      );
                    } else if (
                      profile.type === "Patient" &&
                      profile.id === msg.patientSender
                    ) {
                      {
                        /* right side */
                      }
                      return (
                        <div className="flex justify-end">
                          <ChatMessage
                            msg={msg.message}
                            time={msg.updatedAt}
                            self={true}
                          />
                        </div>
                      );
                    } else {
                      {
                        /* left side */
                      }
                      return (
                        <ChatMessage
                          msg={msg.message}
                          time={msg.updatedAt}
                          self={false}
                        />
                      );
                    }
                  })}
                </>
              )}
            </div>

            {/* input, attachments etc  */}
            <div className="w-full h-14 flex px-3 bg-gray-800">
              <ChatInput sendMsg={sendMsg} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;
