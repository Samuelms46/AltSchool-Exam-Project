import { Link } from "react-router-dom";
import "../styles/TodoItem.css";

function TodoItem({ todo, onEdit, onDelete }) {
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

      <div className="todo-actions">
        <Link
          to={`/todos/${todo.id}`}
          className="btn-view"
          aria-label={`View details of ${todo.title}`}
        >
          View
        </Link>
        <button
          onClick={() => onEdit(todo)}
          className="btn-edit"
          aria-label={`Edit ${todo.title}`}
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo)}
          className="btn-delete-small"
          aria-label={`Delete ${todo.title}`}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default TodoItem;
