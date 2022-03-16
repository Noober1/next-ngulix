import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { useRouter } from "next/router";

import { useSelector } from 'react-redux'
import { hideLoadingScreen, selectNoPersistConfig, showLoadingScreen } from '../../redux/slices/noPersistConfigSlice'
import { useDispatch } from 'react-redux'
import Loading from '../molecules/Loading';

const LoadingScreen = ({delay}) => {
	const dispatch = useDispatch()
	const { loadingScreen } = useSelector(selectNoPersistConfig)
	const router = useRouter()

	let loadingTimeout;
	let timer;
	let isLoading = false;
	let activeRequests = 0;

	function showLoading() {
		if (isLoading) return
		isLoading = true;
		timer = setTimeout(function () {
			// 
			dispatch(showLoadingScreen())
		}, delay);
	}

	function hideLoading() {
		if (activeRequests > 0) return
		isLoading = false
		clearTimeout(timer);
		// 
		dispatch(hideLoadingScreen());
	}

	useEffect(() => {
		router.events.on("routeChangeStart", showLoading)
		router.events.on("routeChangeComplete", hideLoading)
		router.events.on("routeChangeError", hideLoading)
	
		return () => {
			router.events.off("routeChangeStart", showLoading)
			router.events.off("routeChangeComplete", hideLoading)
			router.events.off("routeChangeError", hideLoading)
		}
	}, [])
	

	return <Loading isLoading={loadingScreen}/>
}

LoadingScreen.defaultValue = {
	delay: 1000
}

LoadingScreen.propTypes = {
	delay: PropTypes.number
}

export default LoadingScreen