import './Learn.css'

export default function SeftEvaluateButton({show}){
    return (
        <div className={show===true?"seft-evaluate-button-group":"unactive"}>
            <div className="seft-evaluate-button evaluate-repeat-button">
                <div>Học lại</div>
                <div>1 phút</div>
            </div>
            <div className="seft-evaluate-button evaluate-hard-button">
                <div>Khó</div>
                <div>1 ngày</div>
            </div>
            <div className="seft-evaluate-button evaluate-normal-button">
                <div>Bình thường</div>
                <div>2 ngày</div>
            </div>
            <div className="seft-evaluate-button evaluate-easy-button">
                <div>Dễ</div>
                <div>4 ngày</div>
            </div>
        </div>
    )
}