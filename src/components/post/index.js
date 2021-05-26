import {useState} from "react"
const states = ["EDIT", "PREVIEW"]

function Post () {
    const [edit, setEdit] = useState(true)
    const [content, setContent] = useState("Edit me")

    function toggle(){
        setEdit(!edit)
    }

    return (
        <form className="form"  onSubmit={e => {
            e.preventDefault()
            toggle()
        }}>
        {
            edit && 
            <div class="form-group row flex-center">
                <label for="large-input">New Item</label>
                <input id="input-block" placeholder="Large input" 
                    onChange={e => setContent(e.target.value)}
                    className="col sm-12"
                    value={content} />
                <button type="submit">Add</button>
            </div> 
        }
        {
            !edit &&
            <button className="btn-block">{content}</button>
        }
        </form>
    );
}

export default Post;