import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DebugCreateUserLayout from "./layouts/DebugCreateUserLayout";
import DebugListUsersLayout from "./layouts/DebugListUsersLayout";

function App() {
  return (
    <BrowserRouter>
      {/* Defines what handles page routing */}
      <Routes>
        {/* Debug CRUD Layout */}
        <Route
          path="/debug/createUser"
          element={<DebugCreateUserLayout />}
        ></Route>
        <Route
          path="/debug/listUsers"
          element={<DebugListUsersLayout />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
