import React from "react";

const TodoFooter = ({ listItems, setFilterOption }) => {
  let itemCount = listItems.length;
  // console.log(listItems.length);
  return (
    <div className="inputDiv">
      <div className="footerContainer">
        <div className="itemsLeft">{itemCount} items left</div>

        <div className="middleFooter">
          <div className="allTasks" onClick={() => setFilterOption("")}>
            All
          </div>
          <div
            className="activeTasks"
            onClick={() => setFilterOption("Active")}
          >
            Active
          </div>
          <div
            className="tasksCompleted"
            onClick={() => setFilterOption("Completed")}
          >
            Completed
          </div>
        </div>
        <div className="clearCompleted">Clear Completed</div>
      </div>
    </div>
  );
};

export default TodoFooter;
