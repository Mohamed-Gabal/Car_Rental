import React from "react";
import Car from "../assets/car.png";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-14 bg-light text-center">
      <h1 className="text-4xl md:text-5xl font-semibold">
        Luxury cars on Rent
      </h1>

      {/* FORM */}
      <form>
        <div className="">
          <div className=""></div>
        </div>
      </form>

      {/* IMAGE */}
      <img src={Car} alt="car" className="max-h-74" />
    </div>
  );
};

export default Hero;
