import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';

const NAME = 'noPersistConfig'

const noPersistConfig = createSlice({
	name: NAME,
	initialState:{
		
	},
	reducers: {
		
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload[NAME],
			};
		},
	},
});

export const {
	
} = noPersistConfig.actions

export const selectNoPersistConfig = state => state.noPersistConfig

export default noPersistConfig