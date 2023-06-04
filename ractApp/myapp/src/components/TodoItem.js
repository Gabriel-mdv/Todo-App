import React from 'react';
import { deleteTodoAsync, toogleCompleteAsync } from '../redux/todoSlice';
import { useDispatch } from 'react-redux';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch()

	const handleCheckBox = () => {
		dispatch(toogleCompleteAsync({id: id, completed: !completed}))
	}
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed} style={{marginRight: '5px'}}
					onChange={handleCheckBox}
					></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={() => dispatch(deleteTodoAsync({id: id}))}>Delete</button>
			</div> 
		</li>
	);
};

export default TodoItem;
