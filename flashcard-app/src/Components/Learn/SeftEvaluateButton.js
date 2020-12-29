import './Learn.css'

export default function SeftEvaluateButton({show, learn=f=>f, flashcardId=0, changeFlashcard=f=>f, currentIndex}){
    function handleClick(){
        learn(flashcardId);
        changeFlashcard(currentIndex+1);
    }
    return (
        <div className={show===true?"seft-evaluate-button-group":"unactive"}>
            <div className="seft-evaluate-button evaluate-repeat-button" onClick={() => handleClick() }>
                <div>Học lại</div>
                <div>1 phút</div>
            </div>
            <div className="seft-evaluate-button evaluate-hard-button" onClick={() => handleClick() }>
                <div>Khó</div>
                <div>1 ngày</div>
            </div>
            <div className="seft-evaluate-button evaluate-normal-button" onClick={() => handleClick() }>
                <div>Bình thường</div>
                <div>2 ngày</div>
            </div>
            <div className="seft-evaluate-button evaluate-easy-button" onClick={() => handleClick() }>
                <div>Dễ</div>
                <div>4 ngày</div>
            </div>
        </div>
    )
}