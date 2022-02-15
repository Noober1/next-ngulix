import React from 'react'
import Head from 'next/head'
import Tooltip from '../components/molecules/Tooltip'
import Typography from '@mui/material/Typography'
import Link from '../components/molecules/Link'

const MainPage = () => {
	return (
		<>
			<Head>
				<title>Entahlah, manakutau</title>
			</Head>
			<div>MainPage</div>
			<Link href="/panel">
				Ke Entahlah
			</Link>
			<Tooltip
				arrow={true}
				title={
					<Typography>
						Test
					</Typography>
				}
			>
				<Link href="/sample" className="test">
					Entah
				</Link>
			</Tooltip>
		</>
	)
}

export default MainPage