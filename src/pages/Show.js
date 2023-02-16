import { Link, useLoaderData, Form } from "react-router-dom";

const Show = (props) => {
  const post = useLoaderData();

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.subject}</h1>
      <h2>{post.details}</h2>
      <section>
        <h2>Update this todo</h2>
        <Form action={`/update/${post.id}`} method="post">
          <input type="text" name="subject" placeholder="update subject here" defaultValue={post.subject}/>
          <input type="text" name="details" placeholder="update details here" defaultValue={post.details}/>
          <button>Update Todo</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button>Delete Todo</button>
        </Form>
      </section>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;
