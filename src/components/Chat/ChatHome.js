import React from 'react';
import Chat from './Chat';
import Contacts from './Contacts';
import Navbar from 'components/Utils/Navbar';

const ChatHome = () => {

    return (
        <>
            <div className='flex flex-row'>
                <Navbar />
                <div className='relative left-[16%] w-[84%] flex flex-row'>
                    <div className='w-[30%]'>
                        <Contacts />
                    </div>
                    <div className='w-[70%]'>
                        <Chat />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatHome;