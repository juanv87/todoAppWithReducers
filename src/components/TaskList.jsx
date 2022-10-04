import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const TaskList = () => {
  const { tasks, done } = useContext(GlobalContext);
  console.log("🚀 ~ file: TaskList.jsx ~ line 6 ~ TaskList ~ tasks", tasks);
  return (
    <>
      <div>TaskList</div>
      <div className="flex justify-center">
        <div className="w-1/2">
          {tasks.map(({ id, title }) => (
            <div
              key={id}
              className="bg-gray-900 px-20 py-5 shadow-2xl mb-4 flex justify-between"
            >
              <h1>{title}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskList;
