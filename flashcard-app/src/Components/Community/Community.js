import displayStyle from '../../Utils/displayStyle';

export default function Community({display}){
    return (
        <div className="content-container" style={ display===false?displayStyle:{}}>
            This is community page!
        </div>
    )
}