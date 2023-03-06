import React from 'react';

const ChatMessage = ({ msg, time }) => {
    const [date, stamp] = time.split("T");
    console.log(typeof stamp)
    return (
        <>
            <div className="flex items-end w-3/6 mx-4 bg-gray-200 my-3 rounded-tl-lg rounded-tr-lg rounded-br-lg">
                <div className="p-3">
                    <div className="text-md"></div>
                    <div className="text-md text-gray-500">
                        {msg}
                    </div>
                    <div className="text-xs text-gray-600">{date} - {new Date(stamp).getHours()}</div>
                </div>
            </div>
        </>
    )
}

export default ChatMessage;