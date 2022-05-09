import React from 'react';
import { Header } from '../components';
import CancelFlight from '../components/manageBookingFlow/cancelFlight';
import PrivateRoute from "../components/PrivateRoute";

const CancelFlightPage = () => {
  return (
    <>
    <Header/>
        <CancelFlight/>
    </>
  )
}

export default PrivateRoute(CancelFlightPage); 