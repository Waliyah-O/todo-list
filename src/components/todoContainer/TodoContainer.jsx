import React, { useState } from "react";
import TodoBackground from "../todoBackground/TodoBackground";
import sunIcon from "../../assets/images/icon-sun.svg";
import TodoInputs from "./TodoInputs";
import TodoLists from "./TodoLists";
import TodoFooter from "./TodoFooter";

const TodoContainer = () => {
  const [listItems, setListItems] = useState([
    { id: 1, text: "Complete Online JavaScript Course", completed: true },
    { id: 2, text: "10 minutes meditation", completed: true },
    { id: 3, text: "Jog around the park 3x", completed: false },
    { id: 4, text: "Pick up groceries", completed: false },
    { id: 5, text: "Complete todo app", completed: false },
  ]);

  const [filterOption, setFilterOption] = useState("");
  let filteredList =
    filterOption === "Active"
      ? listItems.filter((item) => !item.completed)
      : filterOption === "Completed"
      ? listItems.filter((item) => item.completed)
      : listItems;

  return (
    <div>
      <TodoBackground />
      <div className="container">
        <header className="header">
          <h1>TODO</h1>
          <img src={sunIcon} alt="sun" />
        </header>
        <TodoInputs {...{ listItems, setListItems }} />
        <TodoLists {...{ setListItems }} listItems={filteredList} />
        <TodoFooter {...{ listItems, setFilterOption }} />
      </div>
    </div>
  );
};

export default TodoContainer;
