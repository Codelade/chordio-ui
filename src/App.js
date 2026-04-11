import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminCreateUserLayout from "./layouts/AdminCreateUserLayout";
import AdminListUsersLayout from "./layouts/AdminListUsersLayout";
import AdminEditUserLayout from "./layouts/AdminEditUserLayout";
import AuthLayout from "./layouts/AuthLayout";
import UserHomeLayout from "./layouts/UserHomeLayout";
import { AuthProvider, useAuth } from "./context/AuthContext";

function ProtectedRoute({ children, requiredRole }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (requiredRole && user.role?.toLowerCase() !== requiredRole.toLowerCase()) {
    return <Navigate to="/home" replace />;
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
            path="/home"
            element={
              <ProtectedRoute>
                <UserHomeLayout />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/createUser"
            element={
              <ProtectedRoute requiredRole="administrator">
                <AdminCreateUserLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/listUsers"
            element={
              <ProtectedRoute requiredRole="administrator">
                <AdminListUsersLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/editUser/:id"
            element={
              <ProtectedRoute requiredRole="administrator">
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
