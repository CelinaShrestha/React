import React from "react";
import Button from "../Button";
import { useState } from "react";

function Form({ AddLists }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    if (!title) return;

    e.preventDefault();

    const addList = { title, description, completed: false, id: Math.random() };
    console.log(addList);

    AddLists(addList);

    setTitle("");
    setDescription("");
  }

  return (
    <form className="Add-item-form" onSubmit={handleSubmit}>
      <div className="form-input">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button variant="add" width="w-[100px]">
        Add List
      </Button>
    </form>
  );
}

export default Form;
