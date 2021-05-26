import logo from './logo.svg';
import './App.css';
import "papercss/dist/paper.min.css"
import Board from './components/board';
import Post from './components/post';

function App() {
  return (
    <div className="App container-lg margin">
      <h1>Paper Kanban</h1>
      <div className="border border-primary form-group row">
      <input classname="sm-8 col" type="text" placeholder="Add List Name" id="NewBoardName"></input>
      <button className="btn-block sm-4 col">Create</button>
      </div>
      <Board name='To-Do' />
      <div>
        <Post />
      </div>
    </div>
  );
}

export default App;
