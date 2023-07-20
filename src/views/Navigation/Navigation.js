import React from "react";
import './Navigation.scss'
import {
    NavLink
} from "react-router-dom";

class Navigation extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact>Home</NavLink>
                <NavLink to="/todo" activeClassName="active">ToDo List</NavLink>
                <NavLink to="/job" activeClassName="active">Job List</NavLink>
                <NavLink to="/user" activeClassName="active">User List</NavLink>
            </div>
        )
    }
}
export default Navigation