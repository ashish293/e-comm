import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";

const activeStyle = "active";
const nonActiveStyle = "inactive";
const Header = () => {
	let cartCount = useSelector((state) => state.cart.items.length);
	return (
		<nav className="navbar bg-light">
			<Link className="navbar-brand" to="/">
				E-comm
			</Link>
			<ul className="navbar-nav">
				<li className="nav-item">
					<NavLink
						to="cart"
						className={({ isActive }) => (isActive ? activeStyle : nonActiveStyle) + " cart-icon"}
					>
						<i className="bi bi-cart4" style={{ fontSize: "2rem" }}></i>
						<span className="cart-badge">{cartCount}</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
