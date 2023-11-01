import React, { useState } from "react";

const TodoInputs = ({ listItems, setListItems }) => {
  const [newItem, setNewItem] = useState("");

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  function submitItem(e) {
    if (e.key === "Enter" && newItem !== "") {
      var newItemObject = {
        id: listItems.length + 1,
        text: newItem,
        completed: false,
      };
      setListItems([...listItems, newItemObject]);
      setNewItem("")
    }
  }

  return (
    <div className="inputDiv">
      <div className="radioBtn"></div>
      <input
        className="inputTasks"
        type="text"
        placeholder="Create a new todo"
        value={newItem}
        onChange={handleInputChange}
        onKeyDown={submitItem}
      />
    </div>
  );
};

export default TodoInputs;
