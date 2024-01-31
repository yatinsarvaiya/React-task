import React, { useState } from "react";
import "./toDoList.css";

  const ToDoList = () => {
  const [inputText, setInputText] = useState("");
  const [uncompletedList, setUncompletedList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Date.now());
    if (inputText.trim() !== "") {
      setUncompletedList([
        ...uncompletedList,
        { text: inputText, id: Date.now() },
      ]);
      setInputText("");
    }
  };

  const handleCheckboxChange = (id, isCompleted) => {
    const itemToMove = isCompleted
      ? completedList.find((item) => item.id === id)
      : uncompletedList.find((item) => item.id === id);

    if (isCompleted) {
      setCompletedList(completedList.filter((item) => item.id !== id));
      setUncompletedList([...uncompletedList, itemToMove]);
    } else {
      setUncompletedList(uncompletedList.filter((item) => item.id !== id));
      setCompletedList([...completedList, itemToMove]);
    }
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type here..."
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="list-container">
        <div className="list-section">
          <h2>Uncompleted List</h2>
          <ul>
            {uncompletedList.length>0 ? uncompletedList.map((item) => (
              <li key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  onChange={() => handleCheckboxChange(item.id, false)}
                />
                <label htmlFor={item.id}>{item.text}</label>
              </li>
            )): "No Task Created"}
          </ul>
        </div>
        <div className="list-section">
          <h2>Completed List</h2>
          <ul className="list-items">
            {completedList.length > 0? completedList.map((item) => (
              <li key={item.id}>
                <input
                  id={item.id}
                  type="checkbox"
                  checked
                  onChange={() => handleCheckboxChange(item.id, true)}
                />
                <label htmlFor={item.id}>{item.text}</label>
              </li>
            )): "No Task Completed"}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
