import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {addUser} from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [emailId, setEmailId] = useState("dhoni@gmail.com");
	const [password, setPassword] = useState("Dhoni@123");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLoginBtn = async () => {
		try {
			const res = await axios.post("/login", {
				emailId,
				password
			}, { withCredentials: true });
			console.log("Login res", res)
			navigate("/");
			dispatch(addUser(res.data));
		} catch(err) {
			console.log(err);
		}
	}

  	return (
		<div className='flex justify-center my-3'>
			<div className="card bg-base-300 w-96 shadow-sm">
				<div className="card-body">
					<h2 className="card-title justify-center">Login</h2>
						<fieldset className="fieldset">
						<legend className="fieldset-legend">Email ID</legend>
						<input
							type="text" 
							className="input" 
							value={emailId}
							onChange={(e)=>setEmailId(e.target.value)}
						/>
					</fieldset>
					<fieldset className="fieldset">
						<legend className="fieldset-legend">Password</legend>
						<input 
							type="password" 
							className="input" 
							value={password}
							onChange={(e)=>setPassword(e.target.value)}
						/>
					</fieldset>
					<div className="card-actions justify-center">
      					<button className="btn btn-primary" onClick={handleLoginBtn}>Login</button>
    				</div>	
				</div>
			</div>
		</div>
  	)
}

export default Login
