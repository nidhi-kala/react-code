import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="facts">
        <h1>Fun Facts about React</h1>
        <ul className="list">
          <li>Was first released in 2013</li>
          <li>Was orginally created by Jordan Walke</li>
          <li>Has over 150K stars on GitHub </li>
          <li>Is Maintianed by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
