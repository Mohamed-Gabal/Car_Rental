import React, { useState } from "react";
import Title from "../../components/Title";

const AddCar = () => {
  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 0,
    pricePerDay: 0,
    category: "",
    transmission: "",
    fuel_type: "",
    seating_capacity: 0,
    location: "",
    description: "",
  });

  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      {/* IMPORT TITLE COMPONENT */}
      <Title
        title="Add New Car"
        subTitle="Fill in details to list a new car for booking, including pricing, availability, and car specifications."
      />
    </div>
  );
};

export default AddCar;
