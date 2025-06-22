import { Routes, Route } from 'react-router-dom';
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Login from "./pages/Auth/Login/Login";
import Register from './pages/Auth/Register/Register';
import OrderReview from "./pages/OrderReview/OrderReview";
import Profile from "./pages/Profile/Profile";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { CartProvider } from "./contexts/CartContext.tsx";
import Jobs from './pages/Jobs/Jobs';
import Franchisor from './pages/Franchisor/Franchisor';
import CoffeeShops from './pages/CoffeeShops/CoffeeShops';
import NotFound from './pages/NotFound/NotFound';

import "./global.css";

export default function App() {
	return (
		<CartProvider>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/product/:id" element={<ProductDetails />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/order-review" element={<OrderReview />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/jobs" element={<Jobs />} />
				<Route path="/franchisor" element={<Franchisor />} />
				<Route path="/coffee-shops" element={<CoffeeShops />} />
				<Route path="/not-found" element={<NotFound />} />
			</Routes>
		</CartProvider>
	)
}