import { Typography, Box, useMediaQuery } from '@mui/material'
import React from 'react'
import Link from '../molecules/Link'
import DarkModeButton from '../molecules/DarkModeButton'
import Tooltip from '../molecules/Tooltip'
import PropTypes from 'prop-types'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RssFeedOutlinedIcon from '@mui/icons-material/RssFeedOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import { useRouter } from 'next/router'
import clsx from 'clsx'

const MenuLink = () => {
    
	const listMenu = [
		{text: 'Home', title: 'Home page', link: '/profile', icon: <HomeOutlinedIcon/>},
		{text: 'About', title: 'Detail about me', link: '/profile/about', icon: <InfoOutlinedIcon/>},
		{text: 'Blog', title: 'My thoughts', link: '/profile/blog', icon: <RssFeedOutlinedIcon/>},
		{text: 'Contact', title: 'Ways you can reach me', link: '/profile/contact', icon: <ContactsOutlinedIcon/>}
	]
	
	return(
		<ul>
			{listMenu.map(item => (
				<li key={item.link}>
					<Tooltip
						arrow={true}
						placement="right"
						title={<Typography>{item.title}</Typography>}
					>
						<Link href={item.link} className="font-bold uppercase flex flex-col items-center justify-between gap-1 md:gap-0">
                            <span aria-hidden="true">
                                {item.icon}
                            </span>
							{item.text}
						</Link>
					</Tooltip>
				</li>
			))}
		</ul>
	)
}

const ProfileLayout = ({children}) => {
    const router = useRouter()
    const isSmallScreen = useMediaQuery('(max-width:767px)')

	return (
		<>
			<Box
                component="main"
                className="profile-container"
                sx={{
                    backgroundImage: () => {
                        return router.pathname == '/profile' ? 'url(/hero.png)' : `url()`
                    },
                    '&::before': {
                        backgroundColor: theme => theme.palette.background.default,
                        opacity: 0.5
                    }
                }}
            >
				<Box className="main-menu" sx={{
                    backgroundColor: theme => isSmallScreen ? theme.palette.background.default : 'transparent'
                }}>
					<MenuLink/>
				</Box>
				<div className="main-content">
                    {children}
				</div>
                <div className="md:w-20">
                    <div className="page-tools">
                        <DarkModeButton size="large"/>
                    </div>
                </div>
			</Box>
            <div className="fixed top-0 left-0 bg-gray-700 text-white">
				<div className="inline sm:hidden">
					XS
				</div>
				<div className="hidden sm:inline md:hidden">
					SM
				</div>
				<div className="hidden md:inline lg:hidden">
					MD
				</div>
				<div className="hidden lg:inline xl:hidden">
					LG
				</div>
				<div className="hidden xl:inline 2xl:hidden">
					XL
				</div>
				<div className="hidden 2xl:inline">
					XL+
				</div>
			</div>
		</>
	)
}

ProfileLayout.defaultProps = {
    children: 'No content'
}

ProfileLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default ProfileLayout