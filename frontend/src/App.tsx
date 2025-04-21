import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Products from "./pages/Products";

import "./global.css";

export default function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/products" element={<Products />} />
			</Routes>
		</>
	)
}