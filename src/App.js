import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DebugCreateUserLayout from "./layouts/DebugCreateUserLayout";
import DebugListUsersLayout from "./layouts/DebugListUsersLayout";
import DebugEditUserLayout from "./layouts/DebugEditUserLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/debug/createUser" element={<DebugCreateUserLayout />} />

        <Route path="/debug/listUsers" element={<DebugListUsersLayout />} />

        <Route path="/debug/editUser/:id" element={<DebugEditUserLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
