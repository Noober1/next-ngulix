import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const MainPage = () => {
	return (
		<>
			<Head>
				<title>Entahlah, manakutau</title>
			</Head>
			<div>MainPage</div>
			<Link href="/entah?q=a&b=c">
				<a>Ke entahlah</a>
			</Link>
		</>
	)
}

export default MainPage