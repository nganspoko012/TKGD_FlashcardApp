import '../style.css'

export default function MainNav(){
    return (
    <nav className="main-nav">
        <a class="active" href="#"><i className="material-icons md-24">menu</i></a>
        <a href="#"><i className="material-icons md-24">home</i></a>
        <a href="#"><span>Cộng đồng</span></a>
        <a href="#"><span>Giới thiệu</span></a>
        <a href="#"><span>Trợ giúp</span></a>
    </nav>
)
}
