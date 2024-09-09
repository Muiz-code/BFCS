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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Route>
    )
  );

  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
