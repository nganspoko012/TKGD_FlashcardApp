import './Learn.css'
export default function ProgressBar({currentIndex, length}) {
    return (
        <div className="progress-container">
            <div className="progress-detail">{currentIndex}/{length} Thẻ</div>
            <div className="progress-bar">
                <div className="mask" style={{width: currentIndex*100/length + '%'}}></div>
            </div>
            <div className="progress-detail">00:00</div>
        </div>
    )
}