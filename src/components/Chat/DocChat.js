import React from 'react';

const DocChat = ({ image, name, id, currentChatContact }) => {
    //on clicking it will get the details of that contact
    const changeChat = () => {
        let user = {
            image, name, id
        }
        currentChatContact(user);
    }

    return (
        <>
            <div className="my-3 hover:cursor-pointer" onClick={changeChat}>
                <div className="flex m-3 bg-gray-600 rounded-lg p-2">
                    <div>
                        <img
                            className="w-14 h-14 rounded-full"
                            src={image}
                            alt="DP"
                        />
                    </div>

                    <div className="flex-grow p-3">
                        <div className="flex text-md justify-between">
                            <div className='text-md'>{name}</div>
                            {/* <div className="text-white">12:00 AM</div> */}
                        </div>
                        {/* <div className="text-md text-white">
                            Just do the exercises told to you..
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DocChat;