import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface BookingDataState {
  origin: string;
  destination: string;
  origincity:string;
  destinationcity:string;

  passenger:{
    child: number,
    adult: number,
    seniorcitizen: number,
    infant: number,
    total: number
  }

}

let initialState: BookingDataState = {
  origin: "BLR",
  destination: "DEL",
  origincity:"Bangalore",
  destinationcity:"New Delhi",

  passenger:{
    child: null,
    adult: 1,
    seniorcitizen: null,
    infant: null,
    total: null
  },
  
};


export const bookingDataSlice = createSlice({
  name: "bookingData",
  initialState,
  reducers: {
    oneWay: (state, action) => {
      state.origin = action.payload?.selectedOptionOrg;
      state.destination = action.payload?.selectedOptionDest;
      state.origincity = action.payload?.selectedOrgCity;
      state.destinationcity = action.payload?.selectedDestCity;
      state.passenger.adult=action.payload?.adult;
      state.passenger.child=action.payload?.child;
      state.passenger.seniorcitizen=action.payload?.seniorcitizen;
      state.passenger.infant=action.payload?.infant;
      state.passenger.total=action.payload?.total;
      // state.date=action.payload?.date;
      // state.passenger=action.payload?.passenger;
    },
    // updatePassenger: (state, action) => {

    // }
  },
});

export const { oneWay } = bookingDataSlice.actions;
export const bookingDataSelector = (state: RootState) => state.bookingData;

export default bookingDataSlice.reducer;

