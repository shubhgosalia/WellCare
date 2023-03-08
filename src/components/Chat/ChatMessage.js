import React from 'react';

const ChatMessage = ({ msg, time, self }) => {
    // const date = time.split("T")[0];
    // const dateTime = new Date(time);
    console.log("time : ", time);
    return (
        <>
            <div className={`flex items-end w-3/6 mx-4 my-3 rounded-tl-lg rounded-tr-lg rounded-br-lg ${self ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <div className="p-3">
                    <div className="text-md"></div>
                    <div className={`text-md ${self ? 'text-gray-300' : 'text-gray-500'}`}>
                        {msg}
                    </div>
                    {/* <div className="text-xs text-gray-600">{date} - {dateTime.getHours()} : {dateTime.getMinutes()}</div> */}
                </div>
            </div>
        </>
    )
}

export default ChatMessage;