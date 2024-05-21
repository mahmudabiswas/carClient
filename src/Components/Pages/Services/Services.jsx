import React, { useEffect, useState } from "react";
import Service from "./service";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl"> {serviceData.length} </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {serviceData.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
