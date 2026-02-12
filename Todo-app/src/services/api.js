const BASE_URL = "https://api.oluwasetemi.dev";

const handleApiError = async (response, defaultMessage) => {
  let errorMessage = defaultMessage;
  try {
    const errorData = await response.json();
    if (errorData.errors) {
      errorMessage = JSON.stringify(errorData.errors, null, 2);
    } else {
      errorMessage =
        errorData.message || errorData.error || JSON.stringify(errorData);
    }
    console.error("API Error Details:", errorData);
  } catch (e) {
    console.error("Could not parse error response:", e);
  }
  throw new Error(`${errorMessage} (Status: ${response.status})`);
};

export const todosApi = {
  // READ
  getAll: async (page = 1, limit = 10) => {
    try {
      const response = await fetch(
        `${BASE_URL}/tasks?page=${page}&limit=${limit}`,
      );
      if (!response.ok) {
        await handleApiError(response, "Failed to fetch todos");
      }
      return response.json();
    } catch (error) {
      console.error("API Error (getAll):", error);
      throw error;
    }
  },

  getAllTodos: async () => {
    try {
      const response = await fetch(`${BASE_URL}/tasks?limit=10000`);
      if (!response.ok) {
        await handleApiError(response, "Failed to fetch all todos");
      }
      return response.json();
    } catch (error) {
      console.error("API Error (getAllTodos):", error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/tasks/${id}`);
      if (!response.ok) {
        await handleApiError(response, "Failed to fetch todo");
      }
      return response.json();
    } catch (error) {
      console.error("API Error (getById):", error);
      throw error;
    }
  },

  // CREATE
  create: async (todoData) => {
    try {
      const payload = {
        name: todoData.title || todoData.name,
        description: todoData.description || null,
        status: todoData.completed ? "DONE" : "TODO",
        priority: todoData.priority || "LOW",
      };

      console.log("Creating todo with payload:", payload);

      const response = await fetch(`${BASE_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Create response status:", response.status);

      if (!response.ok) {
        await handleApiError(response, "Failed to create todo");
      }
      return response.json();
    } catch (error) {
      console.error("API Error (create):", error);
      throw error;
    }
  },

  // UPDATE
  update: async (id, todoData) => {
    try {
      const payload = {
        name: todoData.title || todoData.name,
        description: todoData.description || null,
        status: todoData.completed ? "DONE" : todoData.status || "TODO",
        priority: todoData.priority || "LOW",
      };

      console.log("Updating todo:", id, "with payload:", payload);

      const response = await fetch(`${BASE_URL}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Update response status:", response.status);

      if (!response.ok) {
        await handleApiError(response, "Failed to update todo");
      }
      return response.json();
    } catch (error) {
      console.error("API Error (update):", error);
      throw error;
    }
  },

  // DELETE
  delete: async (id) => {
    try {
      console.log("Deleting todo:", id);
      const response = await fetch(`${BASE_URL}/tasks/${id}`, {
        method: "DELETE",
      });

      console.log("Delete response status:", response.status);

      if (!response.ok) {
        await handleApiError(response, "Failed to delete todo");
      }

      if (response.status === 204) {
        return { success: true };
      }

      return response.json();
    } catch (error) {
      console.error("API Error (delete):", error);
      throw error;
    }
  },
};
