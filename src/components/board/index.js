import {useState} from "react";
import Post from "../post";

function Board ({board, posts, handlePostAdd, handlePostEdit, handlePostRemove}) {
    return (
    <div className='container-sm border border-primary'>
        <h4>{board.title}</h4>
            {board.postIDs
                .map((id, index) => 
                    <Post content={posts[id].content} id={id} boardId={board.id} 
                    key={index} handlePostEdit={handlePostEdit} handlePostRemove={handlePostRemove}/>)}
        <button className="btn-block" onClick={() => handlePostAdd(board.id)}>Add New Task</button>
    </div>
    );
}

export default Board;