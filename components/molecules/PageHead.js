import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const PageHead = props => {

	const appName = process.env.APP_NAME || 'Ngulix'
	const titlePage = props.title

	return (
		<Head>
			<title>
				{titlePage ? titlePage + ' - ' + appName : appName}
			</title>
			<meta name="robots" content={props.allowIndexing ? 'index' : 'noindex'} />
		</Head>
	)
}

PageHead.defaultProps = {
	title: null,
	withAppName:true,
	allowIndexing:true
}

PageHead.propTypes = {
	title: PropTypes.string,
	withAppName: PropTypes.bool,
	allowIndexing: PropTypes.bool
}

export default PageHead