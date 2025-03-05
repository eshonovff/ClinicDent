import Navbar from "./Pages/Navbar/Navbar";

import Service from "./Pages/Service/Service";
import "./App.css";
import About from "./Pages/about/About";
import APPOINMENT from "./Pages/APPOINMENT/APPOINMENT";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/home/Home";
import { ScrollProvider } from "./hooks/ScrollProvider";

const App = () => {
  return (
    <ScrollProvider>
      <div className="max-w-[1950px] min-w-[400px] m-auto no-copy bg-blue-50 pb-20 cs:pb-0">
        <Navbar />

        <Home />
        <Service />

        <About />

        <APPOINMENT />

        <Register />

        <Footer />
      </div>
    </ScrollProvider>
  );
};

export default App;