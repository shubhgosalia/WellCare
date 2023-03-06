import React, { useState } from 'react';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/index";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons/index";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Picker from "emoji-picker-react";

const ChatInput = ({ sendMsg }) => {
    //for either showing or hiding the emoji picker
    const [showPicker, setShowPicker] = useState(false);
    const [msg, setMsg] = useState("");
    //handling the text
    const handleChange = (e) => {
        setMsg(e.target.value)
    }
    //to show or not the emoji picker
    const handleEmojiPicker = () => {
        setShowPicker(!showPicker);
    }
    //appending the emoji to the text
    const handleEmojiClick = (emoji, e) => {
        let message = msg;
        message += emoji.emoji;
        setMsg(message);
    }

    const onSubmit = () => {
        sendMsg(msg);
        setMsg("");
    }
    return (
        <>
            <input
                type="text"
                placeholder="Type your message..."
                className="flex-grow focus:outline-none bg-gray-800 text-gray-300"
                onChange={handleChange}
                value={msg}
            />
            <div className='relative'>
                <div className="w-5 m-3 mt-4 hover:cursor-pointer" onClick={handleEmojiPicker}>
                    <FontAwesomeIcon icon={faFaceSmile} color="white" />
                </div>
                {
                    showPicker ?
                        <div className='absolute top-[-350px] left-[-101px]'>
                            <Picker height={"350px"} width={"250px"} onEmojiClick={handleEmojiClick} />
                        </div>
                        : null
                }
            </div>

            <div className="w-5 m-3 mt-4 hover:cursor-pointer">
                <FontAwesomeIcon icon={faPaperclip} color="white" />
            </div>
            <div className="rounded-full w-5 m-3 h-5 mt-4 mr-5 hover:cursor-pointer" onClick={onSubmit}>
                <FontAwesomeIcon icon={faPaperPlane} color="white" />
            </div>
        </>
    )
}

export default ChatInput;

