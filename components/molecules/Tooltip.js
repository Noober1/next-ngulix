import MuiTooltip from '@mui/material/Tooltip';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(({palette}) =>
	createStyles({
		tooltip: {
			backgroundColor: palette.text.primary,
			color: palette.background.paper,
			minWidth:'150px',
			textAlign:'center',
			fontSize: 'Impact',
			position:'relative',
			borderRadius:0,
			'&::before':{
				content: '\'\\00a0 \'',
				position:'absolute',
				bottom:'-6px',
				right:0,
				width:0,
				background:palette.text.primary,
				height:'3px',
				animation:'tooltipHeartbeatStripe 1.5s linear infinite'
			}
		},
		arrow: {
			color: palette.text.primary,
		},
		tooltipPlacementTop:{
			'&::before':{
				bottom:'calc(100% + 3px)',
			}
		}
	})
);

const Tooltip = ({children,classes,...props}) => {
	const style = useStyles()

	return(
		<MuiTooltip
			classes={{
				tooltip: style.tooltip,
				arrow: style.arrow,
				tooltipPlacementTop: style.tooltipPlacementTop
			}}
			{...props}
		>
			{children}
		</MuiTooltip>
	)
}

export default Tooltip