import { Route, Routes } from "react-router-dom";

import Heading from "./components/Heading";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { GlobalContextProvider } from "./context/GlobalContextProvider";

function App() {
  return (
    <>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <GlobalContextProvider>
            <Heading />
            <Routes>
              <Route path="/" element={<TaskList />} exact />
              <Route path="/add" element={<TaskForm />} />
            </Routes>
          </GlobalContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;
