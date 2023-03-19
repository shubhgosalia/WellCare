import React, { useState, useCallback, useEffect,useRef,useContext } from 'react';
import Chat from './Chat';
import Contacts from './Contacts';
import Navbar from 'components/Utils/Navbar';
import {io} from "socket.io-client";
import { UserContext } from 'context/UserContext';
import { useNavigate } from "react-router-dom";

const ChatHome = () => {

    // ADD 
    // change the style of the contact div which is currently active 
     
    const [currentChat, setCurrentChat] = useState(null);
    // currentchat -> name,id,profile_pic 
    
    const {isLoggedIn,profile} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        console.log("chathome mounted...");
    });
    
    //checking if the user is logged in or not
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn]);
    
    // using ref to preserve the socket info across re-renders
    const socket = useRef();
    //emitting event to let the server know that an user is online
    useEffect(()=>{
        if(profile.id){
            console.log("abey andar kyu nai aata : ",profile.id);
            socket.current = io("http://localhost:4000");
            socket.current.emit("add-user",profile.id);
        }
    },[profile]);

    const currentChatContact = useCallback((contact) => {
        setCurrentChat(contact);
    }, []);

    
    return (
        <>
            <div className='flex flex-row'>
                <Navbar />
                <div className='relative left-[16%] w-[84%] flex flex-row'>
                    <div className='w-[30%]'>
                        <Contacts currentChatContact={currentChatContact} />
                    </div>
                    <div className='w-[70%]'>
                        <Chat contact={currentChat} socket={socket} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatHome;