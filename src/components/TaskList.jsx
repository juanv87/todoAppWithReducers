import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const TaskList = () => {
  const { tasks, done, deleteTask } = useContext(GlobalContext);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks || []));
  }, [tasks]);
  return (
    <>
      <div>TaskList</div>
      <div className="flex justify-center">
        <div className="w-1/2">
          {tasks?.map(({ id, title, description }) => (
            <div
              key={id}
              className="bg-gray-900 px-20 py-5 shadow-2xl mb-4 flex justify-between"
            >
              <h1>{title}</h1>
              <p>{description}</p>
              <button onClick={() => deleteTask(id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskList;
