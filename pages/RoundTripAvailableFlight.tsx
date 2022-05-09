import * as React from "react";
import { RoundTripListofFlights, ModifySearch } from "../components";
import PrivateRoute from "../components/PrivateRoute";

const List_of_flights_Round_Trip = () => {
  return (
    <>
      <br></br>
      <ModifySearch />
      <RoundTripListofFlights />
    </>
  );
};

export default PrivateRoute(List_of_flights_Round_Trip);
