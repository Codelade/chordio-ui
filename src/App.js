import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminCreateUserLayout from "./layouts/AdminCreateUserLayout";
import AdminListUsersLayout from "./layouts/AdminListUsersLayout";
import AdminEditUserLayout from "./layouts/AdminEditUserLayout";
import AuthLayout from "./layouts/AuthLayout";
import { AuthProvider, useAuth } from "./context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/auth" element={<AuthLayout />} />

          <Route
            path="/admin/createUser"
            element={
              <ProtectedRoute>
                <AdminCreateUserLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/listUsers"
            element={
              <ProtectedRoute>
                <AdminListUsersLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/editUser/:id"
            element={
              <ProtectedRoute>
                <AdminEditUserLayout />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
