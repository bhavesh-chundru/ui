import React from "react";
import PrivateRoute from "../../components/PrivateRoute";

import BookingSucessfull from "../../components/searchWidgetPanel/bookFlight/BookingSucessfull";

const Payment = () => {
  return (
    <div>
      {" "}
      <BookingSucessfull />
    </div>
  );
};

export default PrivateRoute(Payment);
