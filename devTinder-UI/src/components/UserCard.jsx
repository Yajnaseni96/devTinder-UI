import React from 'react'
import { useSelector } from 'react-redux';

const UserCard = ({ feed }) => {
    const {firstName, lastName, age, about, photoUrl, gender} = feed;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={photoUrl}
                        alt="Img"
                        className="rounded-xl"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{firstName} {lastName}</h2>
                    <p>{about}</p>
                    {age && gender && <p>{age}, {gender}</p>}
                    <div className="card-actions">
                    <button className="btn btn-error">Ignore</button>
                    <button className="btn btn-success">Accept</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;
