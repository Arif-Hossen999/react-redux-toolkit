import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./todosSlice";
import style from "./todos.module.css"

const TodosView = () => {
  const { isLoading, todos, error } = useSelector((state) => state.todos);
  // const todos = useSelector((state) =>console.log(state));

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])
  return (
    <div>
      <h2>Todos</h2>
      {isLoading && <h3>Loading ...</h3>}
      {error && <h3>{error}</h3>}
      <section className={style.section}>
        {todos &&
          todos.map((todo) => {
            return (
              <article key={todo.id} className={style.article}>
                <h5>{todo.title}</h5>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default TodosView;
