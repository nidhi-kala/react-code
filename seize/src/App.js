//import pages
import AboutPage from "./pages/AboutPage";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" exact element={<AboutPage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/work" exact element={<OurWork />} />
          <Route path="/contact" exact element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
