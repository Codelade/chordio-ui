import axios from "axios";

const USER_API_URL = "http://localhost:8080/api/v1/admin/users";

class AdminUserService {
  createUser(user) {
    return axios.post(USER_API_URL, user);
  }

  getUsers() {
    return axios.get(USER_API_URL);
  }

  searchUsers({
    search = "",
    page = 0,
    size = 10,
    sortBy = "id",
    direction = "asc",
  }) {
    const params = new URLSearchParams({
      search,
      page,
      size,
      sortBy,
      direction,
    });

    return axios.get(`${USER_API_URL}/search?${params.toString()}`);
  }

  getUser(id) {
    return axios.get(`${USER_API_URL}/${id}`);
  }

  updateUser(id, user) {
    return axios.put(`${USER_API_URL}/${id}`, user);
  }

  deleteUser(id) {
    return axios.delete(`${USER_API_URL}/${id}`);
  }
}

export default new AdminUserService();
