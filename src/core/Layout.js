import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuth, signout } from "../auth/helpers";

const Layout = ({ children, match, history }) => {
  const isActive = path => {
    if (match.path === path) {
      return "nav-link OpenSans-Bold";
    } else {
      return "nav-link OpenSans-Regular";
    }
  };

  const nav = () => (
    <nav className="navbar navbar-light fixed-top navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="#">
          LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainMenu">
          <ul className="navbar-nav ml-auto navList">
            <li className="nav-item">
              <Link to="/" className={isActive("/")}>
                Home
              </Link>
            </li>
            {!isAuth() && (
              <Fragment>
                <li className="nav-item">
                  <Link to="/signup" className={isActive("/signup")}>
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signin" className={isActive("/signin")}>
                    Sign In
                  </Link>
                </li>
              </Fragment>
            )}

            {isAuth() && isAuth().role === "admin" && (
              <li className="nav-item">
                <Link className={isActive("/admin")} to="/admin">
                  {isAuth().name}
                </Link>
              </li>
            )}

            {isAuth() && isAuth().role === "subscriber" && (
              <li className="nav-item">
                <Link className={isActive("/private")} to="/private">
                  {isAuth().name}
                </Link>
              </li>
            )}

            {isAuth() && (
              <li className="nav-item">
                <span
                  className="nav-link"
                  style={{ cursor: "pointer", color: "#fff" }}
                  onClick={() => {
                    signout(() => {
                      history.push("/");
                    });
                  }}
                >
                  Keluar
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );

  return (
    <Fragment>
      {nav()}
      <div className="">{children}</div>
    </Fragment>
  );
};

export default withRouter(Layout);
