import React, { useEffect, useState } from "react";
import Title from "../../components/Owner/Title";
import Cars from "../../assets/manage_cars.svg";
import Booking from "../../assets/manage_bookings.svg";
import Group from "../../assets/Group_icon.svg";

const Dashboard = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [data, setData] = useState({
    totalCars: 2,
    totalBookings: 5,
    pendingBookings: 1,
    completedBookings: 4,
    resentBookings: [
      {
        car: { brand: "BMW", model: "X5" },
        createdAt: "2025-06-10",
        price: 300,
        status: "confirmed",
      },
    ],
    monthlyRevenue: 1200,
  });

  // DASHBOARD CARDS
  const dashboardCards = [
    { title: "Total Cars", value: data.totalCars, icon: Cars },
    { title: "Total Bookings", value: data.totalBookings, icon: Booking },
    { title: "Pending", value: data.pendingBookings, icon: Group },
    { title: "Confirmed", value: data.completedBookings, icon: Booking },
  ];

  useEffect(() => {}, []);

  return (
    <div className="px-4 md:px-10 pt-10 flex-1">
      {/* IMPORT TITLE COMPONENT */}
      <Title
        title="Admin Dashboard"
        subTitle="Monitor overall platform performance including total cars, bookings, revenue, and recent activities"
      />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl">
        {/* DASHBOARD CARS */}
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-2 p-4 rounded-md border border-borderColor"
          >
            <div>
              <h1 className="text-xs text-gray-500">{card.title}</h1>
              <p className="text-lg font-semibold">{card.value}</p>
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
              <img src={card.icon} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-start gap-6 mb-8 w-full">
        {/* RECENT BOOKING */}
        <div className="p-4 md:p-6 border border-borderColor rounded-md max-w-lg w-full">
          <h1 className="text-lg font-medium">Recent Bookings</h1>
          <p className="text-gray-500">Latest customer bookings</p>

          {data.resentBookings.map((booking, index) => (
            <div key={index} className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <img src={Booking} alt="" className="h-5 w-5" />
                </div>
                <div>
                  <p>
                    {booking.car.brand} {booking.car.model}
                  </p>
                  <p className="text-sm text-gray-500">
                    {booking.createdAt}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 font-medium">
                <p className="text-sm text-gray-500">{booking.price}</p>
                <p className="p-3 py-0.5 border border-borderColor rounded-full text-sm">
                  {currency}
                  {booking.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MONTHLY REVENUE */}
        <div className="p-4 md:p-6 border border-borderColor rounded-md w-full md:max-w-xs">
          <h1 className="text-lg font-medium">Monthly Revenue</h1>
          <p className="text-gray-500">Revenue for current month</p>
          <p className="text-3xl mt-6 font-semibold text-primary">{currency} {data.monthlyRevenue}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
