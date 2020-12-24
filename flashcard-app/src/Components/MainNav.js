import '../style.css'

export default function MainNav(){
    function menuClick(e) {
        e.preventDefault();
        console.log("Menu clicked!")
    }
    return (
    <nav className="main-nav">
        <a href="#" id="menu" onClick={menuClick}><i className="material-icons md-24">menu</i></a>
        <a href="#"><i className="material-icons md-24">home</i></a>
        <a href="#"><span>Cộng đồng</span></a>
        <a href="#"><span>Giới thiệu</span></a>
        <a href="#"><span>Trợ giúp</span></a>
    </nav>
)
}
