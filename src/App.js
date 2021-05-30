import './App.css';
import "papercss/dist/paper.min.css"
import Board from './components/board';
import Post from './components/post';
import { v4 as uuidv4} from 'uuid';
import {useState} from "react";

function App() {

  const [boards, setBoards] = useState({
    "board-1": {id: 'board-1', title: 'Fancy Title', postIDs: ['post-1', 'post-2', 'post-3']},
    "board-2": {id: 'board-2', title: 'Fancy Title2', postIDs: ['post-4']}
  });

  const [posts, setPosts] = useState({
    'post-1': {id: 'post-1', content: 'Finish Me'},
    'post-2': {id: 'post-2', content: 'Finish Me NOW'},
    'post-3': {id: 'post-3', content: 'Finish Me NOW NOW'},
    'post-4': {id: 'post-4', content: 'Finish Me'}});

  const [boardTitle, setBoardTitle] = useState("")

  function handlePostEdit(id, newcontent){
    const newpost = {id, 'content': newcontent}
    setPosts({
      ...posts,
      [id]: newpost
    })
  }

  function handlePostAdd(boardId){
    const newId = uuidv4();
    const newpost = {id: newId, content:'Enter Task'};
    const newPostIDs = [...boards[boardId].postIDs, newId]
    setPosts({
      ...posts,
      [newId]: newpost
    })
    setBoards({
      ...boards,
      [boardId]: {...boards[boardId], postIDs: newPostIDs}
    })
  }

  function handlePostRemove(id, boardId){
    const newPosts = Object.fromEntries(Object.entries(posts).filter(([k, v]) => k !== id));
    const newPostIDs = boards[boardId].postIDs.filter(x => x !== id)
    setPosts(newPosts)
    setBoards({
      ...boards,
      [boardId]: {...boards[boardId], postIDs: newPostIDs}
    })
  }

  function handleBoardCreate(title){
    const newId = uuidv4();
    const newBoard = {id: newId, title: title, postIDs: []};
    setBoards({
      ...boards,
      [newId]: newBoard
    })
  }

  return (
    <div className="App container-lg margin">
      <h1>Paper Kanban</h1>
      <form className="form-group row flex-spaces" onSubmit={(e) => {
        e.preventDefault()
      }}>
        <input className="col col-10" style={{width: "80%"}} type="text" 
          placeholder="Add List Name" id="NewBoardName" 
          onChange={e => setBoardTitle(e.target.value)}></input>
        <button className="col col-2 btn-block" style={{width: "20%"}} 
          onClick={() => handleBoardCreate(boardTitle)}>Create</button>
      </form>
      {Object.keys(boards).map((key, bindex) => {
        return (<Board board={boards[key]} posts={posts} key={bindex} 
          handlePostAdd={handlePostAdd} handlePostRemove={handlePostRemove} handlePostEdit={handlePostEdit}/>)
      })}
    </div>
  );
}

export default App;
