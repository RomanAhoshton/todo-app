import styles from "./index.module.scss";
import Header from "../../components/Header";
import { useAddTodo } from "../../hooks/useAddTodo";
import TodoList from "../../components/TodoList";

const Todo = () => {
  const { addTodo, todoText, setTodoText } = useAddTodo();

  return (
    <div className={styles.todo}>
      <Header />

      <div className={styles.container}>
        <div className={styles.todoForm}>
          <input
            type="text"
            className={styles.todoInput}
            placeholder="Add a new task"
            onChange={(e) => setTodoText(e.target.value)}
            value={todoText}
          />
          <button onClick={addTodo} className={styles.todoButton}>
            Add Todo
          </button>
        </div>

        <TodoList />
      </div>
    </div>
  );
};

export default Todo;
