//import pages
import AboutPage from "./pages/AboutPage";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutPage />} />
        <Route path="/about" exact element={<AboutPage />} />
        <Route path="/work" exact element={<OurWork />} />
        <Route path="/contact" exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
