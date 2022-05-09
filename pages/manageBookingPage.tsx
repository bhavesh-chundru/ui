import React from 'react';
import {Header} from '../components';
import OneWayManageBookingFlow from '../components/manageBookingFlow/oneWayManageBookingFlow';
import PrivateRoute from "../components/PrivateRoute";

const ManageBookingPage = () => {
  return (
    <>
    <Header/>
        <OneWayManageBookingFlow/>
    </>
  )
}
export default PrivateRoute(ManageBookingPage); 