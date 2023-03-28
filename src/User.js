import React from 'react';
import './User.css';

const User = (props) => {
	return (
		<div className=''>
			<ul className='user-list'>
				{props.usersList.map((el) => {
					return (
						<li key={el.id} id={el.id}>
							{el.name}
							<span
								onClick={() => {
									props.delete(el.id);
								}}
							>
								X
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default User;
