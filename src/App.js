// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import logo from "./logo.svg";
import "./App.css";

import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import ProductCarousal from "./components/ProductCarousal";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route exact path="/" component={WalartPediatric} /> */}
        <Route exact path="/Pediatric" element={<ProductCarousal />} />
        <Route exact path="/GYN" element={<ProductCarousal />} />
        <Route exact path="/PHY" element={<ProductCarousal />} />
        <Route exact path="/SUR" element={<ProductCarousal />} />
        {/* <Navigate to="/Pediatric" /> */}
      </Routes>
    </div>
  );
}

export default App;
