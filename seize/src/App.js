//import pages
import AboutPage from "./pages/AboutPage";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AboutPage />
    </div>
  );
}

export default App;
