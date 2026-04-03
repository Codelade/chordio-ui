import axios from "axios";

const USER_API_URL = "http://localhost:8080/api/v1/debug/users";

class DebugUserService {
  createUser(user) {
    return axios.post(USER_API_URL, user);
  }

  getUsers() {
    return axios.get(USER_API_URL);
  }
}

const debugUserService = new DebugUserService();
export default debugUserService;
