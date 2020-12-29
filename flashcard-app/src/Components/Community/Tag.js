import './Community.css'

export default function Tag({content, toggleSelectedTag=f=>f, selected=""}){
    return (
        <div className={selected===content?"tag selected": "tag"} onClick={() => toggleSelectedTag(content)}>{content}</div>
    )
}