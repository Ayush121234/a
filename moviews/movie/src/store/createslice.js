import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  url:{},
  generes:{}

}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
         geturl:(state,action)=>{
            state.url=action.payload
    },
        getgeneres:(state,action)=>{
            state.generes=action.payload
        }
  },
})

// Action creators are generated for each case reducer function
export const { geturl,getgeneres } = counterSlice.actions

export default counterSlice.reducer