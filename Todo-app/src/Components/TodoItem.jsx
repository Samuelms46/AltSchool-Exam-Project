import { Link } from "react-router-dom";
import "../styles/TodoItem.css";

function TodoItem({ todo }) {
  return (
    <article className="todo-item">
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed || false}
          readOnly
          aria-label={`Mark ${todo.title} as ${todo.completed ? "incomplete" : "complete"}`}
        />
        <div className="todo-text">
          <h3 className={todo.completed ? "completed" : ""}>{todo.title}</h3>
          {todo.description && (
            <p className="todo-description">{todo.description}</p>
          )}
        </div>
      </div>
      <Link
        to={`/todos/${todo.id}`}
        className="view-details-btn"
        aria-label={`View details of ${todo.title}`}
      >
        View Details
      </Link>
    </article>
  );
}

export default TodoItem;
