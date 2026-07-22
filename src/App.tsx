import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Businesses from "./pages/Businesses";
import OnlineServices from "./pages/OnlineServices";
import Mobiles from "./pages/Mobiles";
import HomeAppliances from "./pages/HomeAppliances";
import ToursTravels from "./pages/ToursTravels";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/businesses" element={<Businesses />} />

          <Route path="/online-services" element={<OnlineServices />} />

          <Route path="/mobiles" element={<Mobiles />} />

          <Route path="/home-appliances" element={<HomeAppliances />} />

          <Route path="/tours-travels" element={<ToursTravels />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
