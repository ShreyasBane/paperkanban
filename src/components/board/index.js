import {useState} from "react"
import Post from "../post";
import {Droppable} from "react-beautiful-dnd";

function Board ({board, posts, handleAdd, handleEdit, handleRemove}) {
    return (
    <div className='container-sm border border-primary'>
        <h4>{board.title}</h4>
        <Droppable droppableId={board.id}>
            {(provided) => (
                <div
                {...provided.droppableProps}
                ref={provided.innerRef}>
                {board.postIDs
                    .map((id, index) => 
                        <Post content={posts[id].content} id={id} index={index} 
                        key={index} handleEdit={handleEdit} handleRemove={handleRemove}/>)}
                {provided.placeholder}
                </div>
            )}
        </Droppable>
        <button className="btn-block">Add New Task</button>
    </div>
    );
}

export default Board;