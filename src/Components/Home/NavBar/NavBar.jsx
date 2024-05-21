import React, { useContext } from "react";
import logo from "../../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Pages/AuthProvider/AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };
  const route = (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/services"}>Services</Link>
      {user?.email ? (
        <>
          <Link to={"/booking"}>My Booking</Link>
          <Link>
            {" "}
            <button onClick={handleLogOut}>log out</button>{" "}
          </Link>
        </>
      ) : (
        <Link to={"/login"}>LogIn</Link>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <li>{route}</li>
            </li>
          </ul>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <li>{route}</li>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div></div>
        <button className="btn btn-outline btn-error">Appointment</button>
      </div>
    </div>
  );
};

export default NavBar;
