import * as React from "react";
import { OneWayListOfFlights, ModifySearch, Header } from "../components";
import PrivateRoute from "../components/PrivateRoute";
import SignIn from "../components/SignIn/SignIn";

const List_of_flights_one_way = () => {
  return (
    <>
      <Header />
      <br></br>
      <ModifySearch />
      <OneWayListOfFlights />
    </>
  );
};

export default PrivateRoute(List_of_flights_one_way);
