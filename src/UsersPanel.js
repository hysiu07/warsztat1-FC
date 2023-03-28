import React, { useState } from 'react';
import User from './User';

import './UsersPanel.css';

const UsersPanel = () => {
	let inputRef = HTMLInputElement;

	const [usersList, setUsersList] = useState([]);

	const addUser = () => {
		let newUser = {
			name: inputRef.value,
			id: Date.now(),
		};
		setUsersList(() => {
			return usersList.concat(newUser);
		});
		console.log(usersList);
		inputRef.value = '';
	};

	const deleteUser = (userID) => {
		setUsersList((prevList) => {
			return( prevList.filter((user)=> {
				return( user.id !== userID)
			}));
		});
	};

	return (
		<div className='container'>
			<h3>User name</h3>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					console.log(inputRef.value);
					addUser();
				}}
			>
				<input
					type='text'
					ref={(el) => {
						inputRef = el;
					}}
					className='input-name-user'
				/>
				<input type='submit' className='btn' />
			</form>
			<User usersList={usersList} delete={deleteUser} />
		</div>
	);
};
export default UsersPanel;
