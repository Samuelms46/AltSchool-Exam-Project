import { useState, useEffect } from "react";
import "../styles/TodoModel.css";

function TodoModal({ isOpen, onClose, onSubmit, todo, mode = "create" }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const [errors, setErrors] = useState({});

  // Populate form when editing
  useEffect(() => {
    if (todo && mode === "edit") {
      setFormData({
        title: todo.title || "",
        description: todo.description || "",
        completed: todo.completed || false,
      });
    } else {
      setFormData({
        title: "",
        description: "",
        completed: false,
      });
    }
  }, [todo, mode, isOpen]);

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{mode === "create" ? "Create New Todo" : "Edit Todo"}</h2>
          <button
            onClick={onClose}
            className="close-button"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="todo-form">
          <div className="form-group">
            <label htmlFor="title">
              Title <span className="required">*</span>
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              className={errors.title ? "error" : ""}
              placeholder="Enter todo title"
              autoFocus
            />
            {errors.title && (
              <span className="error-message">{errors.title}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter todo description (optional)"
              rows="4"
            />
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="completed"
                checked={formData.completed}
                onChange={handleChange}
              />
              <span>Mark as completed</span>
            </label>
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              {mode === "create" ? "Create Todo" : "Update Todo"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoModal;
