const BASE_URL = "https://api.oluwasetemi.dev";

export const todosApi = {
  getAll: async (page = 1, limit = 10) => {
    const response = await fetch(
      `${BASE_URL}/tasks?page=${page}&limit=${limit}`,
    );
    if (!response.ok) throw new Error("Failed to fetch todos");
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${BASE_URL}/tasks/${id}`);
    if (!response.ok) throw new Error("Failed to fetch todo");
    return response.json();
  },
};
