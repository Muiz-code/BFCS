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
import ClientReview from "./Pages/About Us/ClientReview";
import TellAFriend from "./Pages/Reach Out/TellAFriend";
import Blog from "./Pages/Blog/Blog";
import JoinOurTeamForm from "./Pages/Reach Out/JoinUs";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/clientreview" element={<ClientReview />} />
        <Route path="/tellafriend" element={<TellAFriend />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/joinourteam" element={<JoinOurTeamForm />} />
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
