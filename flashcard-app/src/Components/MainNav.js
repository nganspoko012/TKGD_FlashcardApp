import '../style.css';
import { Link } from 'react-router-dom'


export default function MainNav(){
    function menuClick(e) {
        e.preventDefault();
        console.log("Menu clicked!")
    }
    return (
    <nav className="main-nav">
        <a href="#" id="menu" onClick={menuClick}><i className="material-icons md-24">menu</i></a>
        <Link to="/home"><i className="material-icons md-24">home</i></Link>
        <Link to="/community"><span>Cộng đồng</span></Link>
        <a href="#"><span>Giới thiệu</span></a>
        <a href="#"><span>Trợ giúp</span></a>
    </nav>
)
}
