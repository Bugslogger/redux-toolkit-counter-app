import { createSlice } from "@reduxjs/toolkit"; 

const CounterSlice = createSlice({
    initialState: {
        value: 0
    },
    name: "counter",
    reducers: {
        // create increament and decreament function
        Increament: (state)=>{
        // increase value by one on click
        state.value += 1
        },
        Decreament: (state)=>{
        // decrease value by one on click
        state.value -= 1
        },
    }
})

// export action and reducer
export default CounterSlice.reducer; //reducer
export const {Increament,Decreament} = CounterSlice.actions; // action