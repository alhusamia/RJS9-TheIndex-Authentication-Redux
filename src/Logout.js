import React from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'
import { logout } from "./redux/actions";

const Logout = ({ user, logout }) => {
  if (user) return <Redirect to="/authors" />;
  return (
    <button className="btn btn-danger" onClick={logout}>
      Logout
    </button>
  );
};

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
