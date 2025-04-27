import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

import "./global.css";

export default function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/products" element={<Products />} />
				<Route path="/product/:id" element={<ProductDetails />} />
			</Routes>
		</>
	)
}