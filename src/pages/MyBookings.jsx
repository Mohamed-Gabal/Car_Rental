import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { dummyCarData } from "../assets/assets";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchMyBookings = async () => {
    // LOGIC TO FETCH BOOKINGS FROM API OR STATE MANAGEMENT
    setBookings(dummyCarData);
  };

  useEffect(() => {
    fetchMyBookings();
  }, []);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl">
      {/* IMPORT TITLE COMPONENT */}
      <Title
        title="My Bookings"
        subTitle="View and manage your car bookings"
        align="left"
      />

      <div>
        {bookings.map((booking, index) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12"
          >
            {/* CAR INAGE + INFO */}
            <div className="md:col-span-1">
              <div className="rounded-md overflow-hidden mb-3">
                <img
                  src={booking.image}
                  alt={booking.name}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-lg font-medium mt-2">
                {booking.brand} {booking.model}
              </p>
              <p className="text-gray-500">
                {booking.year} {booking.category} {booking.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
