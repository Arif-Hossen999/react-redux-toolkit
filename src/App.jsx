import "./App.css";
import CounterView from "./features/counter/counterView";
import TodosView from "./features/todos/TodosView"

function App() {
  return (
    <>
      <div>
        <h1>React Redux Toolkit Counter And Todo App</h1>
        <CounterView />
        <TodosView />
      </div>
    </>
  );
}

export default App;
