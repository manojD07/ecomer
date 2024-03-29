import React, {useState} from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Link = require("react-router-dom").Link;


const Navbar = () => {

	const [menu,setMenu] = useState("Home");

	return (
		<div className='navbar'>
			<div className='nav-logo'>
        		<img src={logo} alt='logo' />
        		<p>eCommer</p>
      	</div>

			<ul className='nav-menu'>
      		<li onClick={ ()=>{setMenu("Home")} } > <Link style={ {textDecoration: 'none'}} to='/'>Home</Link> {menu==='Home'?<hr/>:<></>} </li>
      		<li onClick={ ()=>{setMenu("Men")} } > <Link style={ {textDecoration: 'none'}} to='/men'>Men</Link> {menu==='Men'?<hr/>:<></>} </li>
      		<li onClick={ ()=>{setMenu("Women")} } > <Link style={ {textDecoration: 'none'}} to='/women'>Women</Link> {menu==='Women'?<hr/>:<></>} </li>
      		<li onClick={ ()=>{setMenu("Kids")} } > <Link style={ {textDecoration: 'none'}} to='/kids'>Kids</Link> {menu==='Kids'?<hr/>:<></>} </li>
      	</ul>
      	
			<div className="nav-login-cart">
				<Link to='/login'><button>Login</button></Link>
				<Link to='/cart'><img src={cart_icon} alt='cart'/></Link>
				<div className="nav-cart-count">0</div>
			</div>

		</div>
	)
}

export default Navbar
