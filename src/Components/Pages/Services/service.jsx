import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl p-5">
        <figure>
          <img src={img} alt="services" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{price}</p>
        </div>
        <div className="card-actions justify-start">
          <Link to={`/checkOut/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
