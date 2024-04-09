import styles from "./index.module.scss";
import Header from "../../components/Header";
import { useAddTodo } from "../../hooks/useAddTodo";
import { useGetTodo } from "../../hooks/useGetTodo";
import TodoList from "../../components/TodoList";

const Todo = () => {
  const { addTodo, todoText, setTodoText } = useAddTodo();
  const { todo } = useGetTodo();

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

        <TodoList todo={todo} />

        {todo.length === 0 && (
          <p className={styles.emptyTodoText}>Add your first task</p>
        )}
      </div>
    </div>
  );
};

export default Todo;
