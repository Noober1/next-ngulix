import { Typography, List, ListItem, ListItemIcon, ListItemText, } from '@mui/material'
import Tooltip from '../../components/molecules/Tooltip'
import FacebookIcon from '@mui/icons-material/Facebook';
import PageHead from '../../components/molecules/PageHead'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react'
import ProfileLayout from '../../components/layout/ProfileLayout'

const ContactLinks = () => {
	const contactLink = [
		{title: 'Visit my Facebook profile', text: 'fb.me/ruhiyatna.cucu', link: 'https://fb.me/ruhiyatna.cucu', icon: <FacebookIcon/>},
		{title: 'Visit my Github profile', text: 'github.com/Noober1', link: 'https://github.com/Noober1', icon: <GitHubIcon/>},
		{title: 'You can reach me by email', text: 'cucu@ruhiyatna.id', link: 'mailto:cucu@ruhiyatna.id', icon: <EmailIcon/>},
	]

	return(
		<List dense className='w-fit'>
			{contactLink.map(item => (
				<Tooltip key={item.link} title={<Typography>{item.title}</Typography>} arrow placement="right">
					<ListItem className="pl-0">
						<ListItemIcon className='min-w-0 mr-3'>
							{(item.icon)}
						</ListItemIcon>
						<ListItemText>
							<a href={item.link} title={item.title}>{item.text}</a>
						</ListItemText>
					</ListItem>
				</Tooltip>
			))}
		</List>
	)
}

const Profile = () => {
	return (
		<>
			<PageHead allowIndexing title="Cucu Ruhiyatna" disableAppName/>
			<div className="main-header">
				<Typography variant='h1' className="title">
					CUCU RUHIYATNA
				</Typography>
				<Typography variant='h2' component="strong" className="subtitle">
					Junior web programmer
				</Typography>
			</div>
			<div className="description">
				<Typography>
					Hello there, my name is Cucu Ruhiyatna. I am a junior programmer who loves watching anime, play video game and traveling.
				</Typography>
			</div>
			<div className="contact">
				<div className='content'>
					<ContactLinks/>
				</div>
			</div>
		</>
	)
}

Profile.withLayout = page => <ProfileLayout>{page}</ProfileLayout>

export default Profile