import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminCreateUserLayout from "./layouts/AdminCreateUserLayout";
import AdminListUsersLayout from "./layouts/AdminListUsersLayout";
import AdminEditUserLayout from "./layouts/AdminEditUserLayout";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/createUser" element={<AdminCreateUserLayout />} />

        <Route path="/admin/listUsers" element={<AdminListUsersLayout />} />

        <Route path="/admin/editUser/:id" element={<AdminEditUserLayout />} />

        <Route path="/auth" element={<AuthLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
