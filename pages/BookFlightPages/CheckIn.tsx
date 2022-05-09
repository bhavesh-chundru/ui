import React from "react";
import PrivateRoute from "../../components/PrivateRoute";
import CheckInFlow from "../../components/searchWidgetPanel/Check-in/CheckInFlow";

const CheckIn = () => {
  return (
    <div>
      <CheckInFlow />
    </div>
  );
};

export default PrivateRoute(CheckIn);
