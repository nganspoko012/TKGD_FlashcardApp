import '../style.css'
import React from 'react'
import {BrowserRouter as Route,Switch,Redirect,BrowserRouter,NavLink } from 'react-router-dom'

export default function MainNav(){
    function menuClick(e) {
        e.preventDefault();
        console.log("Menu clicked!")
    }
    return (
    <div className="nav-bar">
            <nav className="main-nav">
                <ul>
                    <li><a href="#" id="menu" onClick={menuClick}><i className="material-icons md-30">menu</i></a></li>
                    <li><a href="/"><i className="material-icons md-30">home</i></a></li>
                    <li><NavLink to="/community"><span>Cộng đồng</span></NavLink></li>
                    <li><NavLink to="/introduce"><span>Giới thiệu</span></NavLink></li>
                    <li><NavLink to="/help"><span>Trợ giúp</span></NavLink></li>
                </ul>
            </nav>
    </div>
    )
}
