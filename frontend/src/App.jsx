import { BrowserRouter, Routes, Route } from "react-router-dom";

// Customer Pages
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Food from "./pages/Food";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Admin Pages
import Dashboard from "./admin/Dashboard";
import Hotels from "./admin/Hotels";
import RoomsAdmin from "./admin/RoomsAdmin";
import Bookings from "./admin/Bookings";
import Customers from "./admin/Customers";
import FoodAdmin from "./admin/FoodAdmin";
import Settings from "./admin/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Customer Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/food" element={<Food />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/hotels" element={<Hotels />} />
        <Route path="/admin/rooms" element={<RoomsAdmin />} />
        <Route path="/admin/bookings" element={<Bookings />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/food" element={<FoodAdmin />} />
        <Route path="/admin/settings" element={<Settings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;