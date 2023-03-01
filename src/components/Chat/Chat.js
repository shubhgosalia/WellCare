import React from "react";
import Navbar from "components/Utils/Navbar";
import BoldSearchIcon from "components/Icons/Bold/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "../../../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faPaperPlane } from "../../../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faPaperclip } from "../../../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faFaceSmile } from "../../../node_modules/@fortawesome/free-solid-svg-icons/index";

const Chat = () => {
  return (
    <div className="w-full flex flex-row font-body-primary">
      <div className="w-[16%] ">
        <Navbar />
      </div>

      <div className=" h-screen  bg-gray-800 text-white">
        <div className="text-xl p-3">Chats</div>
        <div className="p-3 flex">
          <input
            className="p-2 w-10/12 bg-gray-200 text-sm focus:outline-none rounded-tl-md rounded-bl-md"
            type="text"
            placeholder="Search for messages or doctor/experts..."
          />
          <div className="w-2/12 flex justify-center items-center bg-gray-200 rounded-tr-md rounded-br-md">
            <BoldSearchIcon size="20" color="black" />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex m-3 bg-gray-600 rounded-lg p-2">
            <div>
              <img
                className="w-14 h-14 rounded-full"
                src="https://www.svgrepo.com/show/61986/avatar.svg"
              />
            </div>

            <div className="flex-grow p-3">
              <div className="flex text-md justify-between">
                <div>Dr. Sehgal</div>
                <div className="text-white">12:00 AM</div>
              </div>
              <div className="text-md text-white">
                Just do the exercises told to you..
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex m-3 bg-gray-600 rounded-lg p-2">
            <div>
              <img
                className="w-14 h-14 rounded-full"
                src="https://www.svgrepo.com/show/61986/avatar.svg"
              />
            </div>

            <div className="flex-grow p-3">
              <div className="flex text-md justify-between">
                <div>Dr. Sehgal</div>
                <div className="text-white">12:00 AM</div>
              </div>
              <div className="text-md text-white">
                Just do the exercises told to you
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex m-3 bg-gray-600 rounded-lg p-2">
            <div>
              <img
                className="w-14 h-14 rounded-full"
                src="https://www.svgrepo.com/show/61986/avatar.svg"
              />
            </div>

            <div className="flex-grow p-3">
              <div className="flex text-md justify-between">
                <div>Dr. Sehgal</div>
                <div className="text-white">12:00 AM</div>
              </div>
              <div className="text-md text-white">
                Just do the exercises told to you
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex m-3 bg-gray-600 rounded-lg p-3">
            <div>
              <img
                className="w-14 h-14 rounded-full"
                src="https://www.svgrepo.com/show/61986/avatar.svg"
              />
            </div>

            <div className="flex-grow p-2">
              <div className="flex text-md justify-between">
                <div>Dr. Sehgal</div>
                <div className="text-white">12:00 AM</div>
              </div>
              <div className="text-md text-white">
                Just do the exercises told to you
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow h-screen flex flex-col">
        <div className="w-full h-14 flex justify-between bg-gray-800">
          <div className="flex items-center">
            <div className="p-2 mt-2">
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.svgrepo.com/show/61986/avatar.svg"
              />
              <div className="flex justify-center items-center w-3 h-3 relative left-6 bottom-3 bg-white rounded-full">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
            </div>
            <div className="p-3 text-white">
              <div className="text-sm">Dr. Sehgal</div>
              <div className="text-xs">Online</div>
            </div>
          </div>
          <div className="flex items-center mr-10">
            <FontAwesomeIcon icon={faEllipsisV} color="gray" />
          </div>
        </div>
        <div className="w-full flex-grow bg-gray-600">
          <div className="flex items-end w-3/6 bg-gray-100 m-8 rounded-tl-lg rounded-tr-lg rounded-br-lg">
            <img
              className="w-10 h-10 rounded-full m-3"
              src="https://www.svgrepo.com/show/61986/avatar.svg"
            />
            <div className="p-3">
              <div className="text-md">Dr. Sehgal</div>
              <div className="text-md text-gray-500">
                Do 3 sets of shoulder exercises that I showed you a day before.
              </div>
              <div className="text-sm text-gray-600">8 minutes ago</div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex items-end w-2/6 bg-gray-800 m-8 rounded-tl-lg rounded-tr-lg rounded-br-lg">
              <div className="p-3">
                <div className="text-md text-white">
                  Okay, I will surely do it as per your instructions.
                </div>
                <div className="text-sm text-gray-200">8 minutes ago</div>
              </div>
              <img
                className="w-10 h-10 rounded-full m-3"
                src="https://www.svgrepo.com/show/61986/avatar.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-14 flex px-3 bg-gray-800">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-grow focus:outline-none bg-gray-800"
          />
          <div className="w-5 m-3 mt-4">
            <FontAwesomeIcon icon={faFaceSmile} color="white" />
          </div>

          <div className="w-5 m-3 mt-4">
            <FontAwesomeIcon icon={faPaperclip} color="white" />
          </div>
          <div className="rounded-full w-5 m-3 h-5 mt-4 mr-5">
            <FontAwesomeIcon icon={faPaperPlane} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
