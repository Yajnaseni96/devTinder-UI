import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [about, setAbout] = useState(user.about);
    const [gender, setGender] = useState(user.gender);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);

    const dispatch = useDispatch();

    const handleProfileUpdate = async () => {
        try {
            const res = await axios.patch(BASE_URL + "/profile/edit", 
                {firstName, lastName, about, age, gender, photoUrl},
                 {withCredentials: true});
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000)
            dispatch(addUser(res.data.data));
        } catch (err) {
            showToast(true);
            setError(err);
        }
    }

    return (
        <div className="flex justify-center">
            <div className='flex justify-center my-3'>
                <div className="card bg-base-300 w-96 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title justify-center">Edit Profile</h2>
                            <div class="toast toast-top toast-center z-50">
                                { showToast && 
                                    <div class="alert alert-success">
                                        <span>Account updated successfully.</span>
                                    </div>
                                }
                            </div>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">First Name: </legend>
                                <input
                                    type="text" 
                                    className="input" 
                                    value={firstName}
                                    onChange={(e)=>setFirstName(e.target.value)}
                                />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Last Name: </legend>
                                <input 
                                    type="text" 
                                    className="input" 
                                    value={lastName}
                                    onChange={(e)=>setLastName(e.target.value)}
                                />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Age: </legend>
                                <input 
                                    type="text" 
                                    className="input" 
                                    value={age}
                                    onChange={(e)=>setAge(e.target.value)}
                                />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Photo Url: </legend>
                                <input 
                                    type="text" 
                                    className="input" 
                                    value={photoUrl}
                                    onChange={(e)=>setPhotoUrl(e.target.value)}
                                />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">About: </legend>
                                <input 
                                    type="text" 
                                    className="input" 
                                    value={about}
                                    onChange={(e)=>setAbout(e.target.value)}
                                />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Gender: </legend>
                                <input 
                                    type="text" 
                                    className="input" 
                                    value={gender}
                                    onChange={(e)=>setGender(e.target.value)}
                                />
                            </fieldset>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary" onClick={handleProfileUpdate}>Update Profile</button>
                            </div>	
                        </div>
                    </div>
                </div>
            <UserCard feed={{firstName, lastName, about, age, gender, photoUrl}} />
        </div>
    )
}

export default EditProfile;
