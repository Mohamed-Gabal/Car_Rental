import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyCarData } from "../assets/assets";
import Arrow_left from "../assets/arrow_left.svg";
import User from "../assets/users_icon.svg";
import Gasoline from "../assets/gasoline.svg";
import Automatic from "../assets/automatic.svg";
import Location from "../assets/location_icon.svg";
import Check from "../assets/chech.svg";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState();

  // useEffect();
  useEffect(() => {
    setCar(dummyCarData.find((car) => car._id === id));
  }, [id]);
  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <button
        className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <img
          src={Arrow_left}
          alt="arrow_left"
          className="rotate-180 opacity-65"
        />
        Back to all Cars
      </button>

      {/* DETAILS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* LEFT: CAR IMAGE & DETAILS */}
        <div className="lg:col-span-2">
          <img
            src={car.image}
            alt={car.model}
            className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md"
          />
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">
                {car.brand} {car.model}
              </h1>
              <p className="text-gray-500">
                {car.category} . {car.year}
              </p>
            </div>
            <hr className="border-borderColor my-6" />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: User, text: `${car.seating_capacity} seats` },
                { icon: Gasoline, text: car.fuel_type },
                { icon: Automatic, text: car.transmission },
                { icon: Location, text: car.location },
              ].map(({ icon, text }) => (
                <div
                  className="flex flex-col items-center bg-light p-4 rounded-lg"
                  key={text}
                >
                  <img src={icon} alt="" className="h-5 mb-2" />
                  {text}
                </div>
              ))}
            </div>

            {/* DESCRIPTION */}
            <div>
              <div className="text-xl font-medium mb-3">Description</div>
              <p className="text-gray-500">{car.description}</p>
            </div>

            {/* FEATURES */}
            <div>
              <h1 className="text-xl font-medium mb-3">Features</h1>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {
                  ["360 Camera", "Bluetooth", "GPS", "Heated Seats", "Rear View Mirror"].map((item) => (
                    <li key={item} className="flex items-center text-gray-500">
                      <img src={Check} alt="check" className="h-4 mr-2" />
                      {item}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT: BOOKING FORM */}
        <div className=""></div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default CarDetails;
