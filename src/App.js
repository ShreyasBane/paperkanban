import logo from './logo.svg';
import './App.css';
import "papercss/dist/paper.min.css"
import Board from './components/board';
import Post from './components/post';
import {DragDropContext} from 'react-beautiful-dnd';
import { uuid } from 'uuidv4';
import {useState} from "react";

function App() {

  const [boards, setBoards] = useState(
    {"board-1": {id: 'board-1', title: 'Fancy Title', postIDs: ['post-1', 'post-2', 'post-3']}}
  );

  const [posts, setPosts] = useState({
    'post-1': {id: 'post-1', content: 'Finish Me'},
    'post-2': {id: 'post-2', content: 'Finish Me NOW'},
    'post-3': {id: 'post-3', content: 'Finish Me NOW NOW'}});

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination)
      return;

    if (
      destination.droppableId == source.droppableId &&
      destination.index == source.index
    ) {
      return;
    }

    console.log(source.droppableId)
    const board = boards[source.droppableId];
    const newPostIds = Array.from(board.postIDs);
    console.log(newPostIds);
    newPostIds.splice(source.index, 1);
    newPostIds.splice(destination.index, 0, draggableId);

    const newBoard = {
      ...board,
      postIDs: newPostIds
    };
    console.log(newBoard);
    const newBoards = {
      ...boards,
      [newBoard.id]: newBoard,
    };
    console.log(newBoards);
    setBoards(newBoards);
  };

  function handleEdit(id, newcontent){
    const newpost = {id, content: newcontent} 
    return newpost
  }

  function handleAdd(post, boardid){
    const newId = uuid()
    const newpost = {post, id: newId}
    return newpost
  }

  function handleRemove(id){
    return posts.filter(x => x.id !== id)
  }

  return (
    <div className="App container-lg margin">
      <h1>Paper Kanban</h1>
      <div className="form-group row flex-spaces">
      <input className="col col-10" style={{width: "80%"}} type="text" placeholder="Add List Name" id="NewBoardName"></input>
      <button className="col col-2 btn-block" style={{width: "20%"}}>Create</button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
      {Object.keys(boards).map((key, bindex) => {
        return (<Board board={boards[key]} posts={posts} key={bindex} 
          handleAdd={handleAdd} handleRemove={handleRemove} handleEdit={handleEdit}/>)
      })}
      </DragDropContext>

    </div>
  );
}

export default App;
