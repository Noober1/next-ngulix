import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItemText, ListItemIcon, ListItem } from '@mui/material'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const Listing = ({listProps, items, bulletIcon, ...props}) => {
	return (
		<List {...listProps}>
            {items.map((item, index) => (
				<ListItem key={index}>
					<ListItemIcon className='min-w-4'>
						{bulletIcon ?? <RadioButtonCheckedIcon />}
					</ListItemIcon>
					<ListItemText>
						{(item)}
					</ListItemText>
				</ListItem>
			))}
        </List>
	)
}

Listing.propTypes = {
	listProps: PropTypes.object,
	items: PropTypes.array.isRequired,
	bulletIcon: PropTypes.elementType
}

export default Listing