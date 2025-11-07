import { Route, Routes } from "react-router";
import { HomePage } from "./components/HomePage";
import { CheckoutPage } from "./components/CheckoutPage";
import { OrdersPage } from "./components/OrdersPage";
import { TrackingPage } from "./components/TrackingPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>
    </>
  );
}

export default App;
