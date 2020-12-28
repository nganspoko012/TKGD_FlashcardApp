import '../style.css'
import React from 'react'
import { BrowserRouter as Route, Switch, Redirect, BrowserRouter, Link } from 'react-router-dom'

export default function MainNav({ menuHandler }) {
    return (
        <div className="nav-bar">
            <nav className="main-nav">
                <ul>
                    <li><a href="#" id="menu" onClick={menuHandler}><i className="material-icons md-24">menu</i></a></li>
                    <li><a href="/"><i className="material-icons md-24">home</i></a></li>
                    <li><Link to="/community"><span>Cộng đồng</span></Link></li>
                    <li><Link to="/introduce"><span>Giới thiệu</span></Link></li>
                    <li><Link to="/help"><span>Trợ giúp</span></Link></li>
                </ul>
            </nav>
        </div>
    )
}
