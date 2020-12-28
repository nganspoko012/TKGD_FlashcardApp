import '../style.css'
import CoursePage from './Course/CoursePage';
import {BrowserRouter as Route,Switch,Redirect,BrowserRouter,NavLink } from 'react-router-dom'

export default function SideNavItem(props) {
    return (
        <a href={`/${props.id}`}>
            <div className="side-nav-item">
                <div className="side-nav-item-icon">
                    <i className="material-icons md-24">{props.iconName}</i>
                </div>
                <div className="side-nav-item-content">
                    <span>{props.content}</span>
                </div>
            </div>
        </a>
    )
}