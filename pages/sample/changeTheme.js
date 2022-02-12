import React from 'react'
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../redux/slices/configSlice';

const TestPage = (props) => {
	const dispatch = useDispatch()

	const changeToDark = () => {
		dispatch(changeTheme('dark'))
	}

	const changeToLight = () => {
		dispatch(changeTheme('light'))
	}

	return (
		<div>
			<button onClick={changeToDark}>Dark</button>
			<button onClick={changeToLight}>Light</button>
		</div>
	)
}

export default TestPage