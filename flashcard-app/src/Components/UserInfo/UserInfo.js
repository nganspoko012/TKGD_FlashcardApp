import Avatar from './Avatar.js'
import './UserInfo.css'


export default function UserInfo(props) {
    function editUserBtnClick(e){
        console.log("User btn clicked!");
    }
    return (
        <div className="user-info">
            <div className="flexbox-container-horizontal">
                <div className="flexbox-icon"></div>
                <div className="flexbox-avatar">
                    <Avatar letter={props.user.displayName.charAt(0)} color={props.user.avatarColor}/>
                </div>
                <div className="flexbox-icon button">
                    <button id="editUserBtn" title="Thay đổi thông tin user" onClick={editUserBtnClick}>
                    <i className="material-icons md-24">edit</i>
                    </button>
                </div>
            </div>
            <div className="user-name">{props.user.displayName}</div>
            <div className="info">10 Học phần - 10 Thẻ đã học</div>
        </div>
    )
}