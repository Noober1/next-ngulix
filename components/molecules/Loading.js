import PropTypes from 'prop-types'
import Backdrop from '@mui/material/Backdrop'
import Typography from '@mui/material/Typography'

const backdropStyles = {
	zIndex: theme => theme.zIndex.drawer + 1
}

const Loading = ({isLoading}) => {
	return (
		<Backdrop className="" sx={backdropStyles} open={isLoading}>
			<Typography>Test</Typography>
		</Backdrop>
	)
}

Loading.propTypes = {
	isLoading: PropTypes.bool.isRequired
}

export default Loading