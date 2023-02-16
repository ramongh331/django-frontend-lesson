import { useLoaderData, Form } from "react-router-dom";
import Post from "../components/Post";


const Index = (props) => {
  const todos = useLoaderData();

  return (
    <>
<section style={{textAlign: "center"}}>
<h2>Create a Todo</h2>
<Form action="/create" method="post">
<input type="text" name="subject" placeholder="write subject here"/>
<input type="text" name="details" placeholder="write details here"/>
<button>Create New Todo</button>
</Form>
</section>

      {todos.map((post) => (
        <Post key={post.id} post={post} />
      ))}

    
    </>
  );
};

export default Index;
