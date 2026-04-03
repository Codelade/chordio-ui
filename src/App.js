import "./App.css";
import DebugCreateUserLayout from "./layouts/DebugCreateUserLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* Defines what handles page routing */}
      <Routes>
        {/* Debug CRUD Layout */}
        <Route path="/debug" element={<DebugCreateUserLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
