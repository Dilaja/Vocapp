import React from "react";
import LandingPageNavBar from "./Navbar";
import RoleBasedNavBar from "./Navbarrole";

const NavigationBarContainer = ({ role, isLandingPage }) => {
  return (
    <div>
      {isLandingPage ? (
        <LandingPageNavBar />
      ) : (
        <RoleBasedNavBar role={role} />
      )}
    </div>
  );
};

export default NavigationBarContainer;