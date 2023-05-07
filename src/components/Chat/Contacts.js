import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import BoldSearchIcon from "components/Icons/Bold/fullStar";
import DocChat from "./DocChat";
import { UserContext } from "context/UserContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// add loader
//add sweet alert if error

const Contacts = ({ currentChatContact }) => {
  const { isLoggedIn, profile, setLoginStatus } = useContext(UserContext);
  const navigate = useNavigate();
  //checking if the user is logged in or not
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    console.log("contact mounted...");
  });

  const [contacts, setContacts] = useState([]);
  const [load, setLoad] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(searchTerm);

  const getContacts = async () => {
    try {
      setLoad(true);
      let res = await axios.get("http://localhost:4000/common/contacts", {
        withCredentials: true,
      });
      console.log("contacts data : ", res);
      if (res.data.success === true) {
        setContacts(res.data.data);
        setLoad(false);
      }
    } catch (err) {
      console.log("err in fetching contacts : ", err);
      setLoad(false);
      Swal.fire({
        icon: "error",
        text: err.response.data.error,
      });
      //if the user is not logged or by any chances the cookie expires then it will take care of it
      if (err.response.data.name === "AuthenticationError") {
        setLoginStatus(false);
        navigate("/login");
      }
    }
  };
  //making an api request for fetching contacts
  useEffect(() => {
    console.log("requesting contacts... : ", profile);
    getContacts();
  }, [profile]);

  return (
    <div>
      <div className=" h-screen  bg-gray-800 text-white">
        <div className="text-xl p-3">Chats</div>
        <div className="p-3 flex">
          <input
            className="p-2 w-10/12 bg-gray-200 text-black text-sm focus:outline-none rounded-tl-md rounded-bl-md"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for messages or doctor/experts..."
          />
          <div className="w-2/12 flex justify-center items-center bg-gray-500 rounded-tr-md rounded-br-md">
            <BoldSearchIcon size="20" color="black" />
          </div>
        </div>

        {/* each doctor component  */}
        {load ? (
          <h4 className="text-light text-center">Loading....!!</h4>
        ) : contacts.length !== 0 ? (
          // contacts
          //   //applying filter to see if the word searched matches or is a subset of any of the doctor names
          //   .filter((contact) =>
          //     contact.doctor_id.name?.toLowerCase().includes(searchTerm)
          //   )
          //   .map((contact) => {
          //     // console.log("contacts : ",contact);
          //     return (
          //       <DocChat
          //         name={
          //           profile.type === "Doctor"
          //             ? contact.slot_blocked_by.name
          //             : contact.doctor_id.name
          //         }
          //         image={
          //           profile.type === "Doctor"
          //             ? contact.slot_blocked_by.profile_pic.image_url
          //             : contact.doctor_id.profile_pic.image_url
          //         }
          //         id={
          //           profile.type === "Doctor"
          //             ? contact.slot_blocked_by._id
          //             : contact.doctor_id._id
          //         }
          //         currentChatContact={currentChatContact}
          //       />
          //     );
          //   })
          contacts
            //applying filter to see if the word searched matches or is a subset of any of the doctor names
            .filter((contact) =>
              contact.name?.toLowerCase().includes(searchTerm)
            )
            .map((contact) => {
              // console.log("contacts : ",contact);
              return (
                <DocChat
                  name={
                    profile.type === "Doctor"
                      ? contact.name
                      : contact.name
                  }
                  image={
                    profile.type === "Doctor"
                      ? contact.profile_pic.image_url
                      : contact.profile_pic.image_url
                  }
                  id={
                    profile.type === "Doctor"
                      ? contact._id
                      : contact._id
                  }
                  currentChatContact={currentChatContact}
                />
              );
            })
        ) : (
          <h4 className="text-light text-center">
            No one to chat right now....!!
          </h4>
        )}
      </div>
    </div>
  );
};

export default React.memo(Contacts);
