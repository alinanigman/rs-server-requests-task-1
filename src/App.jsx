import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/task/:id" element={<TaskPage />} />
    </Routes>
  );
};

export default App;
