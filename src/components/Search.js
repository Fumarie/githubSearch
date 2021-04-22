import React, { useState } from 'react';
import { clearUsers, searchUsers } from "../redux/actions/github";
import { useDispatch } from "react-redux";

const Search = () => {
    const dispatch = useDispatch()
    const [input, inputChange] = useState( '')

    const inputChangeHandler = event => {
        event.preventDefault()
        inputChange(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if(input === '') {
            dispatch(clearUsers())
            return
        }
        dispatch(searchUsers(input))
    }

    return (
        <div className="row">
            <form className="col s12" onSubmit={submitHandler}>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="input" type="text" className="validate" value={input} onChange={(event) => inputChangeHandler(event)} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Search;
