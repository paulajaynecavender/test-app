import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Add a todo"
        name="text"
        className="todo-input"
        onChange={inputTextHandler}
        value={inputText}
      />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i>
          <FontAwesomeIcon icon={faPlus} />
        </i>
      </button>
      <div className="select">
        <p>Filter:</p>
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
