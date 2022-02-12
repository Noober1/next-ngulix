import React from 'react'
import LoginBox from '../../components/organisms/LoginBox'
import Head from 'next/head'
import MainLayout from '../../components/layout/MainLayout'

const PanelPage = () => {
	return (
		<>
			<Head>
				<title>Login Page{process.env.customKey}</title>
			</Head>
			<LoginBox/>
		</>
	)
}

// PanelPage.withLayout = page => <MainLayout>{page}</MainLayout>

export async function getServerSideProps({req, res}) {
	return {
		props:{
			test: 'OK'
		}
	}
}

export default PanelPage