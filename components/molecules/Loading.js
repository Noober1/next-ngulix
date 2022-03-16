import PropTypes from 'prop-types'
import Backdrop from '@mui/material/Backdrop'
import Typography from '@mui/material/Typography'

const backdropStyles = {
	zIndex: theme => theme.zIndex.drawer + 1
}

const Loading = ({isLoading}) => {
	return (
		<Backdrop className="" sx={backdropStyles} open={isLoading}>
			<img className="w-full max-w-xs hidden sm:block" src="/logo.png"/>
		</Backdrop>
	)
}

Loading.propTypes = {
	isLoading: PropTypes.bool.isRequired
}

export default Loading