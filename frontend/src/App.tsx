import { Routes, Route } from 'react-router-dom';
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Login from "./pages/Auth/Login/Login";
import Register from './pages/Auth/Register/Register';
import OrderReview from "./pages/OrderReview/OrderReview";
import Profile from "./pages/Profile/Profile";
import Home from './pages/Home/Home';
import { CartProvider } from "./contexts/CartContext.tsx";

import "./global.css";

export default function App() {
	return (
		<CartProvider>
			<Routes>
				<Route path="/products" element={<Products />} />
				<Route path="/product/:id" element={<ProductDetails />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/order-review" element={<OrderReview />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</CartProvider>
	)
}