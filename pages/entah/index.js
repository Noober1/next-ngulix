import React from 'react'
import Link from 'next/link'

const EntahPage = ({entahlah}) => {
	console.log(entahlah)
	return (
		<>
			<div>
				EntahPage {entahlah.q}
			</div>
			<Link href="/">
				<a>Kembali</a>
			</Link>
		</>
	)
}

export async function getServerSideProps({req, res}) {
	return {
		props: {
			entahlah: req.query
		}
	}
}

export default EntahPage