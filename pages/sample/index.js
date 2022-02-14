import React from 'react'
import { List, ListItemText, ListItemIcon, ListItem } from '@mui/material'
import Listing from '../../components/molecules/Listing'
import Link from '../../components/molecules/Link'

const SamplePage = () => {

    const links = [
        {
            link: '/sample/changeTheme',
            text: 'Change Theme'
        },
        {
            link: '/sample/LoadingScreen',
            text: 'Loading Screen'
        },
    ]

    return (
        <div>
            {/* <ul>
                <li>
                    <Link href="/sample/changeTheme">
                        <a>Change Theme</a>
                    </Link>
                </li>
                <li>
                    <Link href="/sample/LoadingScreen">
                        <a>Loading Screen</a>
                    </Link>
                </li>
            </ul> */}
            <Listing items={links.map(item => (
                <Link key={item.link} href={item.link}>
                    {item.text}
                </Link>
            ))}/>
            <Link href="/">
                Back to root page
            </Link>
        </div>
    )
}

export default SamplePage