import axios from "axios";

const AUTH_API_URL = "http://localhost:8080/api/v1/auth";

class AuthService {
  login(usernameOrEmail, password) {
    return axios.post(`${AUTH_API_URL}/login`, { usernameOrEmail, password });
  }

  register(userName, email, password) {
    return axios.post(`${AUTH_API_URL}/register`, {
      userName,
      email,
      password,
    });
  }
}

export default new AuthService();
