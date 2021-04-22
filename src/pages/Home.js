import React from 'react';
import Search from "../components/Search";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const Home = () => {

    const {users, loading} = useSelector(state => state.github)

    return (
        <>
        <h1>Git search</h1>
        <Search />
        <div className="row">
                {loading ? <h2>Loading...</h2>
                    :
                    users.map(user => (
                    <div className="col-sm-3 mb-4" key={user.id}>
                        <Card user={user} />
                    </div>
                    ))}
        </div>
        </>
    );
};

export default Home;
