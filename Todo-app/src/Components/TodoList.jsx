import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { todosApi } from "../services/api";
import TodoItem from "./TodoItem";
import Pagination from "./Pagination";
import "../styles/TodoList.css";

function TodoList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todos", currentPage],
    queryFn: () => todosApi.getAll(currentPage, itemsPerPage),
  });

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner" aria-label="Loading todos"></div>
        <p>Loading todos...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error-container" role="alert">
        <h2>Error loading todos</h2>
        <p>{error.message}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  // Extract data based on actual API response structure
  const todos = data?.data || [];
  const totalPages = data?.meta?.totalPages || 1;

  return (
    <div className="todo-list-container">
      <header className="todo-header">
        <h1>My Todos</h1>
        <p>Manage your tasks efficiently</p>
      </header>

      {todos.length === 0 ? (
        <div className="empty-state">
          <p>No todos found. Start by creating one!</p>
        </div>
      ) : (
        <>
          <section className="todos-grid">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </section>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
}

export default TodoList;
