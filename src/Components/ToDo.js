import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ text, todo, todos, setTodos }) => {
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
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <div className="button-group">
        <button className="complete-btn" onClick={completeHandler}>
          <i>
            <FontAwesomeIcon icon={faCheck} />
          </i>
        </button>
        <button className="delete-btn" onClick={deleteHandler}>
          <i>
            <FontAwesomeIcon icon={faTrash} />
          </i>
        </button>
      </div>
    </div>
  );
};

export default ToDo;
