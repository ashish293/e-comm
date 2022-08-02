import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CategoriesScreen from "./pages/CategoriesScreen";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<Header />
			<div className="middle-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/category/:category_name" element={<CategoriesScreen />} />

					<Route path="cart" element={<Cart />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
};

export default App;
