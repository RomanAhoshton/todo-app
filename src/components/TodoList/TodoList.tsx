import styles from "./index.module.scss";
import { TodoType } from "../../types";

interface TodoListType {
  todo: TodoType[];
}

const TodoList = ({ todo }: TodoListType) => {
  return (
    <div>
      {todo?.map((item, index) => {
        return (
          <div key={item.id} className={styles.todoItem}>
            <p className={styles.number}>{`${index + 1})`}</p>
            <p className={styles.text}>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
