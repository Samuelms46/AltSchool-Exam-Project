import { useParams, Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { todosApi } from "../services/api";
import "../styles/TodoDetail.css";

function TodoDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: todo,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["todo", id],
    queryFn: () => todosApi.getById(id),
  });

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner" aria-label="Loading todo details"></div>
        <p>Loading todo details...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error-container" role="alert">
        <h2>Error loading todo</h2>
        <p>{error.message}</p>
        <Link to="/" className="back-link">
          ← Back to Todos
        </Link>
      </div>
    );
  }

  return (
    <main className="todo-detail-page">
      <div className="todo-detail-container">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back
        </button>

        <article className="todo-detail-card">
          <header className="todo-detail-header">
            <h1>{todo.title}</h1>
            <span
              className={`status-badge ${todo.completed ? "complete" : "incomplete"}`}
            >
              {todo.completed ? "✓ Complete" : "○ Incomplete"}
            </span>
          </header>

          <div className="todo-detail-content">
            {todo.description && (
              <section className="detail-section">
                <h2>Description</h2>
                <p>{todo.description}</p>
              </section>
            )}

            <section className="detail-section">
              <h2>Details</h2>
              <dl className="detail-list">
                <div className="detail-item">
                  <dt>ID:</dt>
                  <dd>{todo.id}</dd>
                </div>
                <div className="detail-item">
                  <dt>Status:</dt>
                  <dd>{todo.completed ? "Completed" : "Pending"}</dd>
                </div>
                {todo.createdAt && (
                  <div className="detail-item">
                    <dt>Created:</dt>
                    <dd>{new Date(todo.createdAt).toLocaleDateString()}</dd>
                  </div>
                )}
                {todo.updatedAt && (
                  <div className="detail-item">
                    <dt>Updated:</dt>
                    <dd>{new Date(todo.updatedAt).toLocaleDateString()}</dd>
                  </div>
                )}
              </dl>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}

export default TodoDetailPage;
