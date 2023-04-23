import React, { useState,useContext } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { UserContext } from 'context/UserContext';


const Rating = () => {

    const [rating, setRating] = useState("1");
    const [load, setLoad] = useState(false);
    const { profile } = useContext(UserContext);
    const navigate = useNavigate();

    if(profile.type === 'Doctor'){
        navigate('/home');
        return;
    }

    // const { roomId } = useParams();

    const giveRating = async () => {
        // try {
            setLoad(true);
        //     fetch("http://localhost:8000/feed/get-user/", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         'Authorization': `Token ${localStorage.getItem('token')}`
        //     },
        //     body: JSON.stringify({
        //         roomId: roomId,
        //         rating: rating
        //       })
        //     });
        //     setLoad(false);
        //     Swal.fire({
        //         icon: "success",
        //         title: "Review submitted successfully",
        //       });
        //       navigate("/");
        // } catch (err) {
        //     setLoad(false);
        //     console.log("err in the rating : ", err);
        // }
        setLoad(false);
        Swal.fire({
            icon: "success",
            title: 'Review has been posted successfully'
          });
         navigate("/home");

    }

    const handleChange = (e) => {
        setRating(e.target.value);
    }

    return (
        <>
            <div className="w-[100%] h-[100vh] flex justify-center items-center bg-dark-100">
                <div className="w-[450px] border p-5 rounded-lg">
                    <p className="text-lg text-gray-300 pr-2 py-3">Please let us know how was your current session?</p>
                    <div className="flex justify-between w-[100%]">
                        {/* 1  */}
                        <div className="flex items-center pl-4 rounded-lg">
                            <input
                                id="bordered-radio-1"
                                type="radio"
                                value="1"
                                name="rating"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                checked={rating === "1" ? true : false}
                            onChange={handleChange}
                            />
                            <p className="text-sm text-gray-300 px-2">
                                1
                            </p>
                        </div>
                        {/* 2  */}
                        <div className="flex items-center pl-4 rounded-lg">
                            <input
                                id="bordered-radio-1"
                                type="radio"
                                value="2"
                                name="rating"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                checked={rating === "2" ? true : false}
                            onChange={handleChange}
                            />
                            <p className="text-sm text-gray-300 px-2">
                                2
                            </p>
                        </div>
                        {/* 3  */}
                        <div className="flex items-center pl-4 rounded-lg">
                            <input
                                id="bordered-radio-1"
                                type="radio"
                                value="3"
                                name="rating"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                checked={rating === "3" ? true : false}
                            onChange={handleChange}
                            />
                            <p className="text-sm text-gray-300 px-2">
                                3
                            </p>
                        </div>
                        {/* 4  */}
                        <div className="flex items-center pl-4 rounded-lg">
                            <input
                                id="bordered-radio-1"
                                type="radio"
                                value="4"
                                name="rating"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                checked={rating === "4" ? true : false}
                            onChange={handleChange}
                            />
                            <p className="text-sm text-gray-300 px-2">
                                4
                            </p>
                        </div>
                        {/* 5  */}
                        <div className="flex items-center pl-4 rounded-lg">
                            <input
                                id="bordered-radio-1"
                                type="radio"
                                value="5"
                                name="rating"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                checked={rating === "5" ? true : false}
                            onChange={handleChange}
                            />
                            <p className="text-sm text-gray-300 px-2">
                                5
                            </p>
                        </div>
                    </div>
                    <button className="w-[100%] button text-sm p-2 my-3" onClick={giveRating}>
                        {
                            load ?
                                "Loading..."
                                :
                                "Rate it!"
                        }
                    </button>
                </div>
            </div>
        </>
    )
}

export default Rating;