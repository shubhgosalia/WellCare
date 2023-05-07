import React from "react";

const ChatMessage = ({ msg, time, self }) => {
  //will convert the time into respective localestrings for displaying it on the UI
  if (!time) {
    time = new Date();
  } else {
    time = new Date(time);
  }

  let dateString = time.toLocaleDateString();
  let timeString = time.toLocaleTimeString();
  timeString = timeString.slice(0, timeString.length - 6);

  //append 0 to hour if its a single digit
  if (timeString[1] === ":") {
    timeString = "0" + timeString;
  }

  return (
    <>
      <div
        className={`flex items-end w-3/6 mx-4 my-3 rounded-tl-lg rounded-tr-lg rounded-br-lg ${
          self ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <div className="p-3">
          <div className="text-md"></div>
          <div
            className={`text-md ${
              self ? "text-gray-300" : "text-gray-800"
            } break-words
            `}
          >
            {msg}
          </div>
          <div className="text-xs text-gray-500">{dateString}</div>
          <div className="text-xs text-gray-500">{timeString}</div>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
