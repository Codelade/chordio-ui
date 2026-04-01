import './App.css';
import DebugLayout from './layouts/DebugLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>  {/* Defines what handles page routing */}
        <Routes>

          {/* Debug CRUD Layout */}
          <Route path="/admin" element={<DebugLayout />}></Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
