import React, { useContext } from "react";
import AlertContext from "../../Context/alert/alertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div key={alert.id} className="alert">
        <div className={alert.type}><i className="fas fa-info-circle" /> {alert.msg}</div>
      </div>
    ))
  );
};

export default Alerts;
