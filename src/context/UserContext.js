import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

    //getting the login status from the localstorage
    const getLoginStatus = () => {
        console.log("running....");
        let login = window.localStorage.getItem("isLoggedIn");
        if (login == null) {
            window.localStorage.setItem("isLoggedIn", false);
            return false;
        }
        return JSON.parse(login);
    }

    //setting the login status
    const setLoginStatus = (val) => {
        window.localStorage.setItem("isLoggedIn", val);
        setLogin(val);
    }

    //setting up the login status
    const [isLoggedIn, setLogin] = useState(getLoginStatus());
    //porfile of the current user
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        username: "",
        gender: "",
        age: "",
        profile_pic: "",
        id: "",
        type: "",
        licenseNumber: "",
        locality: "",
        specialization: "",
        years_Of_Experience: "",
        fees: "",
        clinic_address: "",
        category: "",
        bio: "",
    });
    let navigate = useNavigate();

    //getting profile if the user is logged in
    const getProfile = async () => {
        try {
            console.log("isloggedin : ", isLoggedIn);
            if (isLoggedIn) {
                console.log("login ke andar gaya hhaiiii")
                let resp = await axios.get('http://localhost:4000/common/profile', {
                    withCredentials: true
                });
                console.log(resp);
                setProfile(resp.data.data.newUser)

            }
        }
        catch (err) {
            console.log("error in fetching profile : ", err);
            //if error occurs navigate to home page
            navigate('/login')
            return;
        }
    }

    useEffect(() => {
        console.log("user context... : ");
        getProfile();
    }, [isLoggedIn]);

    return (
        <UserContext.Provider value={{ isLoggedIn, getLoginStatus, setLoginStatus, profile }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;