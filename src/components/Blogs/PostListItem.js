import axios from "axios";
import { Link } from "react-router-dom";

function PostListItem(props){
    function deletePost(){
        axios.delete('https://demo-blog.mashupstack.com/api/posts/'+props.post.id).then(response=>{
            alert(response.data.message)
            props.refresh()
        })
    }
    return <div>
        <div className="card">
            <div className="card-body">
                {props.post.title}
                <button className="btn btn-danger float-right" onClick={deletePost}>Delete</button>
                <Link to={"/blog/posts/"+props.post.id+"/edit"} className="btn btn-info float-right">Edit</Link>
                <Link to={"/blog/posts/"+props.post.id} className="btn btn-primary float-right">view</Link>
            </div>
        </div>
    </div>
}

export default PostListItem;