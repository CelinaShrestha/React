import React from "react";
import Heading from "../components/Heading/index.jsx";
import TaskList from "../components/List/index.jsx";
import { useState } from "react";
import Form from "../components/Form/index.jsx";
import Edit from "../components/Edit/index.jsx";

function Home() {
  const [lists, setLists] = useState([]);

  function handleAddLists(list) {
    setLists((lists) => [...lists, list]);
  }

  function handleDeleteList(id) {
    const newList = lists.filter((list) => list.id !== id);
    setLists(newList);
    console.log(newList);
  }

  function handleEditList(list) {
    <Edit list={list} />;
  }

  return (
    <div className="home-page">
      <Heading />
      <Form AddLists={handleAddLists} />
      <TaskList
        lists={lists}
        DeleteList={handleDeleteList}
        EditList={handleEditList}
      />
    </div>
  );
}

export default Home;
