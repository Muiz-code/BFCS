import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Dashboard/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ContactUs from "./Pages/Reach Out/ContactUs";
import Service from "./Pages/Services/Service";
import About from "./Pages/About Us/About";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/aboutUs" element={<About />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
