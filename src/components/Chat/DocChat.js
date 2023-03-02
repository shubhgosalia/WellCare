import React from 'react';

const DocChat = ({ image, name }) => {
    console.log(name);
    return (
        <>
            <div className="my-3">
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
                            <div>{name}</div>
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