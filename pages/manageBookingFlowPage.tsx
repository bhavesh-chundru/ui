import React from "react";
import { Header, ManageBookingFlow } from "../components";
import PrivateRoute from "../components/PrivateRoute";

const ManageBookingFlowPage = () => {
  return (
    <div>
      <Header />
      <ManageBookingFlow />
    </div>
  );
};

export default PrivateRoute(ManageBookingFlowPage);
