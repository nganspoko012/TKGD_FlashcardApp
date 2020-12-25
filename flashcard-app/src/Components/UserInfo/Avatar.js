import './Avatar.css'

export default function Avatar(props){
    return (
        <div className="avatar" style={{backgroundColor: props.color, 
            width: props.size, height: props.size, minHeight: props.size}}>
            <span className="center">{props.letter}</span>
        </div>
    )
}