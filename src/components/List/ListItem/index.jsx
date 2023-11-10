import React from "react";
import Button from "../../Button";

function ListItem({ list, DeleteList, EditList }) {
  return (
    <li className="list">
      <div className="title-description">
        <input type="checkbox" />
        <span>
          <h1>{list.title}</h1>
          <p>{list.description}</p>
        </span>
      </div>
      <div className="buttons">
        <Button variant="edit" onClick={()=>EditList(list)}>Edit</Button>
        <Button variant="delete" onClick={() => DeleteList(list.id)}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default ListItem;
