import { createContext } from "react";

export const initialState = {
  tasks: [
    {
      id: "1",
      title: "Task 1",
      description: "Description 1",
      done: false,
    },
    {
      id: "2",
      title: "Task 2",
      description: "Description 2",
      done: false,
    },
  ],
};

export const GlobalContext = createContext(initialState);
