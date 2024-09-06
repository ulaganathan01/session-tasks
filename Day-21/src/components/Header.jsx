import { useState } from "react";


function Header({cartCount}){

    return (
        <>
        <nav className="header-nav">
            <ul className="nav-container">
                <li>Start Bootstrap</li>
                <li className="nav-item-container">
                    <ul className="nav-items">
                        <li>Home</li>
                        <li className="in-active">About</li>
                        <li className="in-active">Shop<span class="material-symbols-outlined">arrow_drop_down</span></li>
                    </ul>
                </li>
                <li className="cart-container">
                    <button><span class="material-symbols-outlined">shopping_cart</span>Cart <span className="cart-items-count">{cartCount}</span></button>
                </li>
            </ul>
        </nav>
        <div className="main">
            <h1>Shop in style</h1>
            <p>With this shop homepage template</p>
        </div>
        </>
    )
}

export default Header;