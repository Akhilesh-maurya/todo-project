import { Routes, Route } from "react-router-dom";
import Todo from "./components/todo/Todo";
import MapFields from "./components/MapFields";
import Login from "./components/Login";
import Card from "./components/Card";

function ProjectRoutes() {
  return (
    <Routes>
      <Route path="/todo" element={<Todo />} />
      <Route path="/dialog" element={<MapFields />} />
      <Route path="*" element={<Login />} />
      <Route path="card" element={<Card />} />
    </Routes>
  );
}

export default ProjectRoutes;
