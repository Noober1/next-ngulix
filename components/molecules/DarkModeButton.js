import { IconButton, Typography } from '@mui/material'
import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme, selectConfig } from '../../redux/slices/configSlice';
import Tooltip from './Tooltip';


const DarkModeButton = props => {
	const dispatch = useDispatch()
	const { theme } = useSelector(selectConfig)
	const handleSwitchTheme = event => {
		dispatch(changeTheme(theme == 'light' ? 'dark' : 'light'))
	}
	
	return (
		<Tooltip
			arrow={true}
			title={
				<Typography>
					{theme == 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
				</Typography>
			}
			placement="left"
		>
			<IconButton onClick={handleSwitchTheme} {...props}>
				{theme == 'light' ? <DarkModeIcon/> : <LightModeIcon/>}
			</IconButton>
		</Tooltip>
	)
}

DarkModeButton.defaultProps = {
	type: 'light'
}

DarkModeButton.propTypes = {
	type: PropTypes.oneOf([
		'light','dark'
	])
}

export default DarkModeButton