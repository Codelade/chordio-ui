import axiosInstance from "../api/axiosInstance";

const AUTH_API_URL = "/api/v1/auth";

class AuthService {
  login(usernameOrEmail, password) {
    return axiosInstance.post(`${AUTH_API_URL}/login`, {
      usernameOrEmail,
      password,
    });
  }

  register(userName, email, password) {
    return axiosInstance.post(`${AUTH_API_URL}/register`, {
      userName,
      email,
      password,
    });
  }
}

export default new AuthService();
