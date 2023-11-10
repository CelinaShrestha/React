import React from "react";
import ListItem from "./ListItem";

function TaskList({ lists, DeleteList, EditList }) {
  return (
    <ul className="task-lists">
      {lists.map((list) => (
        <ListItem list={list} DeleteList={DeleteList} EditList={EditList} key={list.id} />
      ))}
    </ul>
  );
}

export default TaskList;
