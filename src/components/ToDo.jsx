import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDeleteLeft, faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faDeleteLeft, faCheck);

const ToDo = ({ text, todos, setTodos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <button className="complete-btn" onClick={completeHandler}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <li className="todo-item">{text}</li>
      <button className="trash-btn" onClick={deleteHandler}>
        <FontAwesomeIcon icon={faDeleteLeft} />
      </button>
    </div>
  );
};

export default ToDo;
