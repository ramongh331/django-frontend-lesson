import { Link } from "react-router-dom";

const Post = (props) => {
    const post = props.post
    // style
    const div = {
        textAlign:"center",
        border: "3px solid black",
        margin: "10px auto",
        width: "80%"
    }
    return <>
    <section style={div}>
        <Link to={`/post/${post.id}`}>
            <h1>{post.subject}</h1>
        </Link>
    <h2>{post.details}</h2>
    </section>
    </>;
  };
  
  export default Post;