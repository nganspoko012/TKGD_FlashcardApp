import '../style.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNav({ menuHandler }) {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/" id="menu" onClick={menuHandler}><i className="material-icons md-24">menu</i></Link></li>
                <li><Link to="/"><i className="material-icons md-24">home</i></Link></li>
                <li><Link to="/community"><span>Cộng đồng</span></Link></li>
                <li><Link to="/introduce"><span>Giới thiệu</span></Link></li>
                <li><Link to="/help"><span>Trợ giúp</span></Link></li>
            </ul>
        </nav>
    )
}
