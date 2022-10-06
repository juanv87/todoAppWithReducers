import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TaskList from "./TaskList";

const TaskForm = () => {
  const { addTask } = useContext(GlobalContext);

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
  };

  return (
    <>
      <div className="flex justify-center items-center h-3/4">
        <form action="" className="bg-gray-100 p-10" onSubmit={handleSubmit}>
          <h2 className="mb-7 text-3xl text-gray-900">Añadir tarea</h2>
          <div className="mb-5">
            <TextField
              fullWidth
              name="title"
              label="Title"
              id="fullWidth"
              placeholder="Placeholder"
              sx={{ mt: 1, mb: 1, color: "white", borderColor: "white" }}
              onChange={handleChange}
            />

            <div className="mb-5">
              <TextField
                id="outlined-multiline-flexible"
                label="Description"
                name="description"
                fullWidth
                multiline
                rows={4}
                sx={{ mt: 1, mb: 1, color: "white", borderColor: "white" }}
                onChange={handleChange}
              />
              <Button onClick={handleSubmit} variant="contained">
                Añadir tarea
              </Button>
            </div>
          </div>
        </form>
        <TaskList />
      </div>
    </>
  );
};

export default TaskForm;
