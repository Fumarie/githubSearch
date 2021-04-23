import React, { useReducer } from "react";
import { alertReducer } from "./alertReducer";
import { AlertContext } from "./alertContext";
import { HIDE_ALERT, SHOW_ALERT } from "../contextTypes";


export const AlertState = ({ children }) => {
    const [state, dispatch] = useReducer(alertReducer, null)

    const show = (text, type = 'secondary') => {
        dispatch({
                type: SHOW_ALERT,
                payload: {text, type}
        })
    }

    const hide = () => dispatch({type: HIDE_ALERT})


    return (
        <AlertContext.Provider value={{show, hide, alert: state}}>
            {children}
        </AlertContext.Provider>
    )
}