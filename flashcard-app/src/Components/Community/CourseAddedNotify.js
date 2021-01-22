import './Community.css'

export default function CourseAddedNotify({ show, addedCourseName }) {

    return (
        <div className="added-notify"
             style={ show===true ? { display: 'block' } : { display: 'none' }}>
            <div className="added-notify-content">
                <i className="material-icons md-36 completed">done</i>
                <span>Đã thêm vào {addedCourseName} học phần của bạn!</span>
            </div>

        </div>
    )
}