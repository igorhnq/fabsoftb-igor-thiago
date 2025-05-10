import { Routes, Route } from 'react-router-dom';
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Login from "./pages/Auth/Login/Login";
import Register from './pages/Auth/Register/Register';
import OrderReview from "./pages/OrderReview/OrderReview";

import "./global.css";

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/products" element={<Products />} />
				<Route path="/product/:id" element={<ProductDetails />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/order-review" element={<OrderReview />} />
			</Routes>
		</>
	)
}