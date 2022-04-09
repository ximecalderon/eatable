import HomePage from "./pages/HomePage";
import CartPage from "./pages/cart-page";
import ProductDetail from "./pages/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CheckoutPage from "./pages/checkout-page";
import { ProductsProvider } from "./context/products-context";
import { useState } from "react";
import HistoryPage from "./pages/history/history-page";

const Data = [
  {
    id: 187,
    name: "Cream Soup",
    price: 1000,
    category: "italian",
    description: "Delicious dish",
    picture_url:
      "https://img.freepik.com/free-photo/zucchini-cream-soup-with-garlic-chilli_2829-19613.jpg",
  },
  {
    id: 188,
    name: "Soup",
    price: 1000,
    category: "italian",
    description: "Delicious dish",
    picture_url:
      "https://img.freepik.com/free-photo/zucchini-cream-soup-with-garlic-chilli_2829-19613.jpg",
  },
  {
    id: 189,
    name: "Pasta",
    price: 1000,
    category: "italian",
    description: "Delicious dish",
    picture_url:
      "https://img.freepik.com/free-photo/zucchini-cream-soup-with-garlic-chilli_2829-19613.jpg",
  },
  {
    id: 190,
    name: "Pasta Dish",
    price: 1000,
    category: "italian",
    description: "Delicious dish",
    picture_url:
      "https://img.freepik.com/free-photo/zucchini-cream-soup-with-garlic-chilli_2829-19613.jpg",
  },
];

function AuthenticatedApp() {
  const [orderData, setOrderData] = useState({});
  function handleOrderData(value) {
    setOrderData(value);
  }
  return (
    <ProductsProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/profile" element={<div>Profile</div>} />
          <Route
            path="/cart"
            element={
              <CartPage handleOrderData={handleOrderData} products={Data} />
            }
          />
          <Route
            path="/checkout"
            element={<CheckoutPage orderData={orderData} />}
          />
        </Route>
      </Routes>
    </ProductsProvider>
  );
}

export default AuthenticatedApp;
