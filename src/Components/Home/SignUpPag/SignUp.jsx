import React, { useContext } from "react";
import img from "../../../assets/img/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Pages/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSinUpSubmit = (e) => {
    e.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((res) => console.log(res.user))
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left lg:mr-10">
            <img src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
            <h1 className="text-4xl text-center mb-5 font-extralight">
              Sign Up
            </h1>
            <form onSubmit={handleSinUpSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6 font-bold">
                <button className="btn btn-error">Login</button>
              </div>
              <div>
                <p className="text-center text-red-600 ">Or Sign Up with</p>
                <p className=" text-center text-black ">
                  Already have an account?{" "}
                  <Link to="/logIn" className=" text-red-600 ">
                    LogIn
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
