import {useState} from "react"
import {Draggable} from 'react-beautiful-dnd';
const states = ["EDIT", "PREVIEW"]

function Post ({id, content, index, handleEdit, handleRemove}) {
    const [edit, setEdit] = useState(true)
    const [state, setState] = useState(content)

    function toggle(){
        setEdit(!edit)
    }

    return (
        <Draggable draggableId={id} index={index}>
        {provided => (
            <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            >
            {!edit && <div className="btn-block btn">{content}</div>}
            {edit && <form className="form"  onSubmit={e => {
                e.preventDefault()
                // toggle()
            }}>
                <input type="text" value={content} onChange={() => handleEdit(id, content)}/>
            </form>}
            </div>
        )}
        </Draggable>
    );
}

export default Post;