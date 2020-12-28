import '../style.css'
import React from 'react'
import {BrowserRouter as Route,Switch,Redirect,BrowserRouter,Link } from 'react-router-dom'

import Community from './Community'

export default function MainNav(){
    function menuClick(e) {
        e.preventDefault();
        console.log("Menu clicked!")
    }
    return (
    <div class="nav-bar">
        <BrowserRouter>
            <nav className="main-nav">
                <ul>
                    <li><a href="#" id="menu" onClick={menuClick}><i className="material-icons md-24">menu</i></a></li>
                    <li><a href="/"><i className="material-icons md-24">home</i></a></li>
                    <li><Link to="/community"><span>Cộng đồng</span></Link></li>
                    <li><Link to="/introduce"><span>Giới thiệu</span></Link></li>
                    <li><Link to="/help"><span>Trợ giúp</span></Link></li>
                </ul>
            </nav>
            <main>
                <Switch>
                    <Route path="/community" component={Community} />
                </Switch>
                <Redirect to="/"/>
            </main>
        </BrowserRouter>
    </div>
    )
}
