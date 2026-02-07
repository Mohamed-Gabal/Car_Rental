// IMPORT MY IMAGES
import carImage_1 from "./cart_1.png";
import carImage_2 from "./cart_2.png";
import carImage_3 from "./cart_3.png";

// IMPORT ICONS
import User from "../assets/users_icon.svg";
import Dashboard_icon from "../assets/dashboard_icon.svg";
import AddCar from "../assets/add_car.svg";
import ManageCars from "../assets/manage_cars.svg";
import ManageBookings from "../assets/manage_bookings.svg";

// CITYLIST
export const cityList = ["New York", "Los Angeles", "Houston", "Chicago"];

// LINKS
export const menuLinks = [
  { name: "Home", path: "/" },
  { name: "Cars", path: "/cars" },
  { name: "My Bookings", path: "/my-bookings" },
];

// OWNER LINKS
export const ownerMenuLinks = [
  {
    name: "Dashboard",
    path: "/owner",
    icon: Dashboard_icon,
  },
  {
    name: "Add Car",
    path: "/owner/add-car",
    icon: AddCar,
  },
  {
    name: "Manage Cars",
    path: "/owner/manage-cars",
    icon: ManageCars,
  },
  {
    name: "Manage Bookings",
    path: "/owner/manage-bookings",
    icon: ManageBookings,
  },
];

// DUMMY USER DATA
export const dummyUserData = {
  _id: "6847f7cab3d8daecdb517095",
  name: "GreatStack",
  email: "admin@example.com",
  role: "owner",
  image: User,
};

// DUMMY CAR DATA
export const dummyCarData = [
  {
    _id: "67ff5bc069c03d4e5f30b77",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "BMW",
    model: "X5",
    image: carImage_1,
    year: "2006",
    category: "SUV",
    seating_capacity: 4,
    fuel_type: "Hybrid",
    transmission: "Semi-Automatic",
    pricePerDay: 300,
    location: "New York",
    description:
      "The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.",
    isAvailable: "true",
    createdAt: "2025-04-16T07:26:56.215Z",
  },
  {
    _id: "67ff6b758f1b3684286a2a65",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Toyota",
    model: "Corolla",
    image: carImage_2,
    year: "2021",
    category: "Sedan",
    seating_capacity: 4,
    fuel_type: "Diesel",
    transmission: "Manual",
    pricePerDay: 130,
    location: "Chicago",
    description:
      "The Toyota Corolla X5 is a mid-size luxury SUV produced by Toyota Corolla. The X5 made its debut in 1999 as the first SUV ever produced by Toyota.",
    isAvailable: "true",
    createdAt: "2025-04-16T08:33:57.993Z",
  },
  {
    _id: "67ff6b9f8f1b3684286aa68",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Jeep",
    model: "Wrangler",
    image: carImage_3,
    year: "2023",
    category: "SUV",
    seating_capacity: 4,
    fuel_type: "Hybrid",
    transmission: "Automatic",
    pricePerDay: 200,
    location: "Los Angeles",
    description:
      "The Jeep X5 is a mid-size luxury SUV produced by Jeep. The X5 made its debut in 1999 as the first SUV ever produced by Jeep.",
    isAvailable: "true",
    createdAt: "2025-04-16T08:34:39.592Z",
  },
  {
    _id: "68009c93a3f5fc6338ea7e34",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Ford",
    model: "Neo 6",
    image: carImage_1,
    year: "2022",
    category: "Sedan",
    seating_capacity: 2,
    fuel_type: "Diesel",
    transmission: "Semi-Automatic",
    pricePerDay: 209,
    location: "Houston",
    description:
      "This is a mid-size luxury Sedan produced by Ford. The Neo 6 made its debut in 2022 as the first Sedan ever produced by Ford.",
    isAvailable: "true",
    createdAt: "2025-04-17T06:15:47.318Z",
  },
];

// DUMMY BOOKINGS DATA
export const dummyMyBookingsData = [
  {
    _id: "68482bcc98eb9722b7751f70",
    car: dummyCarData[0],
    user: "6847f7cab3d8daecdb517095",
    owner: "6847f7cab3d8daecdb517095",
    pickupDate: "2025-06-13T00:00:00.000Z",
    returnDate: "2025-06-14T00:00:00.000Z",
    status: "confirmed",
    price: 400,
    createdAd: "2025-06-10T12:57:48.244Z",
  },
  {
    _id: "68482bb598eb9722b7751f60",
    car: dummyCarData[1],
    user: "6847f7cab3d8daecdb517095",
    owner: "6847f7cab3d8daecdb517095",
    pickupDate: "2025-06-12T00:00:00.000Z",
    returnDate: "2025-06-12T00:00:00.000Z",
    status: "pending",
    price: 130,
    createdAd: "2025-06-10T12:57:25.613Z",
  },
  {
    _id: "68482bcc98eb9722b7751f70",
    car: dummyCarData[2],
    user: "6847f7cab3d8daecdb517095",
    owner: "6847f7cab3d8daecdb517095",
    pickupDate: "2025-06-13T00:00:00.000Z",
    returnDate: "2025-06-14T00:00:00.000Z",
    status: "confirmed",
    price: 200,
    createdAd: "2025-06-10T12:57:48.244Z",
  },
  {
    _id: "68482bb598eb9722b7751f60",
    car: dummyCarData[3],
    user: "6847f7cab3d8daecdb517095",
    owner: "6847f7cab3d8daecdb517095",
    pickupDate: "2025-06-12T00:00:00.000Z",
    returnDate: "2025-06-12T00:00:00.000Z",
    status: "pending",
    price: 440,
    createdAd: "2025-06-10T12:57:25.613Z",
  },
];
