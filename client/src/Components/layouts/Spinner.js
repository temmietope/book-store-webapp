import React from "react";

const Spinner = () => {
  let spinnerStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="spinner-div" style={spinnerStyle}>
      <img src="./images/spinner.svg" alt="Loading..." />
    </div>
  );
};

export default Spinner;
