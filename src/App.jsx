import { Route, Routes } from "react-router-dom";

import Heading from "./components/Heading";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <Heading />
          <Routes>
            <Route path="/" element={<TaskList />} exact />
            <Route path="/add" element={<TaskForm />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
