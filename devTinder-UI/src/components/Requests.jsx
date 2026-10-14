import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import { addRequest } from '../utils/requestsSlice';

const Requests = () => {
    const requests = useSelector((store) => store.requests);
    const dispatch = useDispatch();

    const [error, setError] = useState("");

    const fetchRequests = async() => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/pending", { withCredentials: true});
            dispatch(addRequest(res.data.data));
        } catch(err) {
            setError(err);
        }
    };

    useEffect(()=> {
        fetchRequests();
    }, []);
    console.log(requests)
    return (
        <div>
            <h1>Requests</h1>
            {requests && requests.map((req) => {
                return (
                    <div key={req._id}>
                        <div className="card w-80 bg-base-300 card-xs shadow-sm mt-2">
                            <div className="card-body ">
                                <h2 className="card-title justify-center">{req.fromUserId.firstName} {req.fromUserId.lastName}</h2>
                                <p className="justify-center">{req.fromUserId.about}</p>
                                <img className="block mx-auto"  src={req.fromUserId.photoUrl} alt="photo" height={150} width={150} />
                                {/* <p>{req.fromUserId.age}, {req.fromUserId.gender}</p> */}
                                <div className="justify-center card-actions mb-2">
                                    <button className="btn btn-primary" >Accept</button>
                                    <button className="btn btn-error" >Reject</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Requests;
