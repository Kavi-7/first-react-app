import React from "react";

function AppHeader() {
    return(
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="navbar-inner">
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="/#">
                  Project Name
                </a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="/#">Home</a>
                </li>
                <li>
                  <a href="/#">About</a>
                </li>
                <li>
                  <a href="/#">Contact</a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="/#"
                  >
                    Dropdown
                    <span className="caret"></span>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/#">
                      Link 1
                    </a>
                    <a className="dropdown-item" href="/#">
                      Link 2
                    </a>
                    <a className="dropdown-item" href="/#">
                      Link 3
                    </a>
                  </div>
                </li>
              </ul>
              <form className="navbar-form pull-right">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-default">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </nav>
    )
}

export default AppHeader;