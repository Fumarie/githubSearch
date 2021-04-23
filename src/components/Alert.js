import React, { useContext } from 'react';
import { AlertContext } from "../context/alert/alertContext";

const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    if (!alert) return null

    return (
        <div className={`alert alert-${alert.type || 'secondary'} alert-dismissible`} role="alert" style={styles}>
            {alert.text}
            <button type="button" className="close" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};

export default Alert;

