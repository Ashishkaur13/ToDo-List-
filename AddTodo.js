import React, { useState } from 'react';

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc) {
            alert("Title or Description can't be blank.")
        }
        else
             {
        // ye add kardega hmare todo ko todo list me 
        addTodo(title,desc);  //function call 
        setTitle("");
        setDesc("");         
      }
    }
  return (
    <div className="container my-3">
        <h4>Add a Todo</h4>
      <form onSubmit={submit}>
        <div className="form-group my-2">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange = {(e) =>setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="desc"className="form-label">Todo Description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange = {(e) =>setDesc(e.target.value)}
            placeholder="Enter Description"
          />
        </div>
        <button type="submit" className="btn-sm btn btn-success">
          Add todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
