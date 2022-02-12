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
			<Link href="/panel">
				<a>Ke entahlah</a>
			</Link>
			<Link href="/sample">
				<a>Sample page</a>
			</Link>
		</>
	)
}

export default MainPage