
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addConnection } from '../utils/connectionsSlice';

const Connections = () => {
    const connections = useSelector((store) => store.connections);
    const dispatch = useDispatch();
   
    console.log("Redux state:", connections);
console.log("Is array:", Array.isArray(connections));
    const [error, setError] = useState("");

    const fetchConnections = async() => {
        console.log("Hi")
        try {
            const res = await axios.get(BASE_URL + "/user/connections",
                { withCredentials: true}
            );

            dispatch(addConnection(res.data.data));
        } catch(err) {
            setError(err);
        }
    }

    useEffect(() => {
        fetchConnections();
    }, []);

    
    if(!connections) return null;
    if(connections.length === 0) return ( <h1>No connections found.</h1> )

    return (
        <div className='justify-center mt-2'>
            <h1>Connections</h1>
            {connections && connections.map((conn) => {
                return (
                    <div>
                        <div className="card w-96 bg-base-200 card-xs shadow-sm mt-2">
                            <div className="card-body">
                                <h2 className="card-title">{conn.firstName} {conn.lastName}</h2>
                                <p>{conn.about}</p>
                                <img src={conn.photoUrl} />
                                <p>{conn.age}, {conn.gender}</p>
                                <div className="justify-start card-actions">
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

export default Connections;
