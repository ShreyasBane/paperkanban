function Board ({name}) {
    return (
    <div className='container-sm border border-primary'>
        <h4>{name}</h4>
        <button className="btn-block">Add New Task</button>
    </div>
    );
}

export default Board;