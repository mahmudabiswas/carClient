import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Book from "./book";
// import axios from "axios";
import UseAxios from "../../Hooks/useAxios";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const axios = UseAxios();
  const url = `/booking?email=${user?.email}`;

  useEffect(() => {
    axios(url).then((res) => {
      setBooking(res.data);
    });

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBooking(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = booking.filter((booking) => booking._id !== id);
            setBooking(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "patch",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = booking.filter((booking) => booking._id !== id);
          const updated = booking.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBooking(newBookings);
        }
      });
  };

  return (
    <div>
      <h1 className="text-6xl text-center">{booking.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {booking?.map((itemBooking) => (
              <Book
                key={itemBooking._id}
                itemBooking={itemBooking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
