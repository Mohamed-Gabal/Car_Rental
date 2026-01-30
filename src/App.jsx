import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import Cars from "./pages/Cars";
import MyBookings from "./pages/MyBookings";
import Footer from "./components/Footer";

function App() {
  // NOT SHOW LOGIN
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner");
  return (
    <div>
      {/* NAVBAR */}
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}
      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
      {/* FOOTER */}
      {!isOwnerPath && <Footer />}
    </div>
  );
}

export default App;
