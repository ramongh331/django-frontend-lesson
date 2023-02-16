import { redirect } from "react-router-dom";
import url from "./url";

// Create Action
export async function CreateAction({ request }) {
  // get the form data
  const formData = await request.formData();

  // construct request body - new todo
  const newTodo = {
    subject: formData.get("subject"),
    details: formData.get("details"),
  };

  // send request to backend
  await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  // redirect back to index page
  return redirect("/");
}

export async function UpdateAction({ request, params }) {
    // get the form data
    const formData = await request.formData();
  
    // construct new todo
    const updateTodo = {
      subject: formData.get("subject"),
      details: formData.get("details"),
    };
  
    // request to update route in backend
    await fetch(url + params.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTodo),
    });
  
    // redirect back to the index page
    return redirect("/");
  }

  export async function DeleteAction({params}){
     // get the id
     const id = params.id

     // send the request to delete 
     await fetch(url + id + "/", {
        method: "delete"
     })

     // redirect
     return redirect("/")


  }
