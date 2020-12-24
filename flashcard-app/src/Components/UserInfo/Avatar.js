import './Avatar.css'

export default function Avatar(props){
    return (
        <div className="avatar" style={{backgroundColor: props.color}}>
            <span className="center">{props.letter}</span>
        </div>
    )
}