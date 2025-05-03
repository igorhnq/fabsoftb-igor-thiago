import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Auth from "./pages/Auth/Login";

import "./global.css";

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/products" element={<Products />} />
				<Route path="/product/:id" element={<ProductDetails />} />
				<Route path="/auth" element={<Auth />} />
			</Routes>
		</>
	)
}