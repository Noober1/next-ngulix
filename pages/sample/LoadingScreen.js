import React from 'react'
import { useDispatch } from 'react-redux'
import Loading from '../../components/molecules/Loading'
import LoadingScreen from '../../components/organisms/LoadingScreen'
import { showLoadingScreen } from '../../redux/slices/configSlice'

const LoadingScreenPage = () => {

	const dispatch = useDispatch()

	return (
		<>
			<Loading isLoading={true}/>
		</>
	)
}

export default LoadingScreenPage