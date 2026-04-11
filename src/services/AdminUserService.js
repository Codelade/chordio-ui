import axiosInstance from "../api/axiosInstance";

const USER_API_URL = "/api/v1/admin/users";

class AdminUserService {
  createUser(user) {
    return axiosInstance.post(USER_API_URL, user);
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
      sort: `${sortBy},${direction}`,
    });

    return axiosInstance.get(`${USER_API_URL}/search?${params.toString()}`);
  }

  getUser(id) {
    return axiosInstance.get(`${USER_API_URL}/${id}`);
  }

  updateUser(id, user) {
    return axiosInstance.put(`${USER_API_URL}/${id}`, user);
  }

  deleteUser(id) {
    return axiosInstance.delete(`${USER_API_URL}/${id}`);
  }
}

export default new AdminUserService();
