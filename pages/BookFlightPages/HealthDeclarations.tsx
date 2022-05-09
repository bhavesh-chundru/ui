import React from "react";
import Header from "../../components/Header";
import PrivateRoute from "../../components/PrivateRoute";
import HealthDeclaration from "../../components/searchWidgetPanel/Check-in/HealthDeclaration";
const HealthDeclarations = () => {
  return (
    <>
      <Header />
      <HealthDeclaration />
    </>
  );
};

export default PrivateRoute(HealthDeclarations);
