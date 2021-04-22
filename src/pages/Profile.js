import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/actions/github";
import { Link } from "react-router-dom";

const Profile = ({ match }) => {
    const dispatch = useDispatch()
    const urlName = match.params.name

    useEffect(() => {
       dispatch(getUser(urlName))
    }, []);


    const {user, loading} = useSelector(state => state.github)

    return (
        <>
        {
            loading ? <div>Loading...</div>
        :
        <div>
            <h1>Profile page</h1>
            <Link to={'/'}><div style={{fontSize: 18}}>Go home</div></Link>
            <h2>{user.login}</h2>
            <img src={user.avatar_url} alt={user.login} style={{width: 300}}/>
            <h6>Public repositories: {user.public_repos}</h6>
            <div>
                <a href={user.html_url} className="btn btn-primary">Watch profile</a>
            </div>
        </div>
        }
        </>
    );
};

export default Profile;
