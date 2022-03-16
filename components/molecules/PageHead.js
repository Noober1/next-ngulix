import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const PageHead = props => {

	const appName = process.env.APP_NAME || 'Ngulix'
	const titlePage = props.title

	return (
		<Head>
			<title>
				{titlePage ? titlePage + (props.disableAppName ? '' : ' - ' + appName) : appName}
			</title>
			<meta name="robots" content={props.allowIndexing ? 'index' : 'noindex'} />
			<meta name="description" content={props.description} />
		</Head>
	)
}

PageHead.defaultProps = {
	title: null,
	disableAppName:false,
	allowIndexing:true,
	description: "No Description"
}

PageHead.propTypes = {
	title: PropTypes.string,
	disableAppName: PropTypes.bool,
	allowIndexing: PropTypes.bool,
	description: PropTypes.string
}

export default PageHead