import styles from "./index.module.scss";
import { Reorder } from "framer-motion";
import { useGetTodo } from "../../hooks/useGetTodo";
import { DB } from "../../firebase";
import { doc, updateDoc } from "@firebase/firestore";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";

const TodoList = () => {
  const { todo, setTodo } = useGetTodo();
  const auth = getAuth();
  const currentUserId = auth?.currentUser?.uid;

  useEffect(() => {
    const unsubscribe = todo.length > 0 ? listenToTodo() : () => {};

    return unsubscribe;
  }, [todo]);

  const listenToTodo = () => {
    const todoRef = doc(DB, "todo", currentUserId!);
    updateDoc(todoRef, { todo: todo });
  };

  return (
    <Reorder.Group
      onReorder={setTodo}
      values={todo}
      axis="y"
      style={{ listStyle: "none", padding: 0 }}
    >
      {todo?.map((item, index) => {
        return (
          <Reorder.Item
            value={item}
            key={item.id}
            whileDrag={{
              scale: 1.1,
            }}
          >
            <div className={styles.todoItem}>
              <p className={styles.number}>{`${index + 1})`}</p>
              <p className={styles.text}>{item.text}</p>
            </div>
          </Reorder.Item>
        );
      })}
    </Reorder.Group>
  );
};

export default TodoList;
