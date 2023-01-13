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
  homeCarousalData,
  pediatricCarousalData,
  gynP1CarousalData,
  gynP2CarousalData,
  phyP1CarousalData,
  phyP2CarousalData,
  surP1CarousalData,
  surP2CarousalData,
} from "./constants/CarousalData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<ProductCarousal carousalData={homeCarousalData} />}
        />
        <Route
          exact
          path="/Pediatric"
          element={<ProductCarousal carousalData={pediatricCarousalData} />}
        />
        <Route
          exact
          path="/Gyn-P1"
          element={<ProductCarousal carousalData={gynP1CarousalData} />}
        />
        <Route
          exact
          path="/Gyn-P2"
          element={<ProductCarousal carousalData={gynP2CarousalData} />}
        />
        <Route
          exact
          path="/Phy-P1"
          element={<ProductCarousal carousalData={phyP1CarousalData} />}
        />
        <Route
          exact
          path="/Phy-P2"
          element={<ProductCarousal carousalData={phyP2CarousalData} />}
        />
        <Route
          exact
          path="/Sur-P1"
          element={<ProductCarousal carousalData={surP1CarousalData} />}
        />
        <Route
          exact
          path="/Sur-P2"
          element={<ProductCarousal carousalData={surP2CarousalData} />}
        />
        {/* <Navigate to="/Pediatric" /> */}
      </Routes>
    </div>
  );
}

export default App;
