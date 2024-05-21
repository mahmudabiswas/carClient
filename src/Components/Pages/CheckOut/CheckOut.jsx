import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();

  const { title, _id, price, img } = service;

  const handleCheckSubmit = (e) => {
    e.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const amount = form.amount.value;
    const email = form.email.value;
    const order = {
      customerName: name,
      date,
      amount,
      email,
      img,
      service: title,
      service_id: _id,
      price: price,
    };
    console.log(order);
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("your data is successfully");
          form.reset();
        }
      });
  };

  return (
    <div>
      <h1>Check Out : {title} </h1>

      <form onSubmit={handleCheckSubmit} className="card-body p-20 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 ">
          {/* 1 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <input
              type="text"
              placeholder=" name"
              name="name"
              className="input input-bordered"
            />
          </div>
          {/* 2 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="input input-bordered"
            />
          </div>
          {/* 3 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="number"
              name="amount"
              placeholder="Dur Amount"
              className="input input-bordered"
            />
          </div>
          {/* 4 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          {/* 5 */}
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
