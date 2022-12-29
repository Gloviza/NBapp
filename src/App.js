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
import {
  pediatricCarousalData,
  phyCarousalData,
  gynCarousalData,
  surCarousalData,
} from "./constants/CarousalData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route exact path="/" component={WalartPediatric} /> */}
        <Route
          exact
          path="/Pediatric"
          element={<ProductCarousal carousalData={pediatricCarousalData} />}
        />
        <Route
          exact
          path="/GYN"
          element={<ProductCarousal carousalData={gynCarousalData} />}
        />
        <Route
          exact
          path="/PHY"
          element={<ProductCarousal carousalData={phyCarousalData} />}
        />
        <Route
          exact
          path="/SUR"
          element={<ProductCarousal carousalData={surCarousalData} />}
        />
        {/* <Navigate to="/Pediatric" /> */}
      </Routes>
    </div>
  );
}

export default App;
