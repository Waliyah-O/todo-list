import React from "react";
import checkIcon from "../../assets/images/icon-check.svg";

const TodoLists = ({ listItems, setListItems }) => {
  function updateItem(index, item) {
    let tempLists = [...listItems];
    if (tempLists[index].completed) {
      tempLists[index].completed = false;
    } else {
      tempLists[index].completed = true;
    }
    setListItems(tempLists);
  }

  function deleteItem(index) {
    setListItems(listItems.filter((val, i) => i !== index));
  }

  return (
    <div className="todoLists">
      {listItems.map((item, index) => (
        <div className="inputDiv todoList" key={item.id}>
          <div>
            {item.completed ? (
              <div
                className="radioBtn checkImageDiv"
                onClick={() => updateItem(index)}
              >
                <img src={checkIcon} alt="checked" />
              </div>
            ) : (
              <div className="radioBtn" onClick={() => updateItem(index)}></div>
            )}
          </div>
          <p
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            {item.text}
          </p>
          <button className="deleteBtn" onClick={() => deleteItem(index)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoLists;
