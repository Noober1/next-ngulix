import React from 'react'

const PanelPage = () => {
	return (
		<div>PanelPage</div>
	)
}

export async function getServerSideProps({req, res}) {
	return {
		props:{
			test: 'OK'
		}
	}
}

export default PanelPage