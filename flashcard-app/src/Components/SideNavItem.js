import '../style.css'

export default function SideNavItem(props) {
    return (
        <a href="#">
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