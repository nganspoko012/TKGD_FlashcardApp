import './Community.css'
import Chip from '@material-ui/core/Chip';


export default function Tag({content, toggleSelectedTag=f=>f, selected=""}){
    return (
        // <div className={selected===content?"tag selected": "tag"} onClick={() => toggleSelectedTag(content)}>{content}</div>
        <Chip lable={content} onClick={toggleSelectedTag}/>
    )
}