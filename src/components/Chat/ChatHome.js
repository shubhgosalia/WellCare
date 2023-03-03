import React, { useState, useCallback, useEffect } from 'react';
import Chat from './Chat';
import Contacts from './Contacts';
import Navbar from 'components/Utils/Navbar';

const ChatHome = () => {

    // ADD 
    // change the style of the contact div which is currently active 

    const [currentChat, setCurrentChat] = useState(null);
    // currentchat -> name,id,profile_pic 

    useEffect(() => {
        console.log("chathome mounted...");
    });

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
                        <Chat contact={currentChat} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatHome;