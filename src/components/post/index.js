import {useState} from "react"
const states = ["EDIT", "PREVIEW"]

function Post ({id, content, boardId, handlePostEdit, handlePostRemove}) {
    const [edit, setEdit] = useState(false)
    const [state, setState] = useState(content)

    function toggle(){
        setEdit(!edit)
    }

    return (
        <div className='row'>
            {!edit && <button className="col btn-block col-10" onClick={() => toggle()}>{content}</button>}
            {edit && <form className="col form col-10"  onSubmit={e => {
                e.preventDefault()
                toggle()
            }}>
                <input autoFocus type="text" style={{height: '100%'}} value={state} 
                onChange={(e) => {
                    setState(e.target.value)
                    handlePostEdit(id, e.target.value)
                }}/>
            </form>}
            <button className="col col-2" onClick={() => handlePostRemove(id, boardId)}>X</button>
        </div>
        )
}

export default Post;