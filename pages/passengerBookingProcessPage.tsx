import React from "react";
import { Header, PassengerBookingProcess } from "../components";
import PrivateRoute from "../components/PrivateRoute";

const PassengerBookingProcessPage = () => {
  return (
    <div>
      <Header />
      <PassengerBookingProcess />
    </div>
  );
};

export default PrivateRoute(PassengerBookingProcessPage);
