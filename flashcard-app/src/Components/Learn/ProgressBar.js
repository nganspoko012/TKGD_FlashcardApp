import './Learn.css'
export default function ProgressBar() {
    return (
        <div className="progress-container">
            <div className="progress-detail">Animal: 9/10 Thẻ</div>
            <div className="progress-bar">
                <div className="mask"></div>
            </div>
            <div className="progress-detail">01:30</div>
        </div>
    )
}