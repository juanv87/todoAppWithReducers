import { useEffect, useReducer } from "react";
import appReducer from "./AppReducer";
import { GlobalContext, initialState } from "./GlobalContext";
import { v4 } from "uuid";
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState, () => {
    const localData = localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
    return { tasks: localData };
  });

  const addTask = (task) => {
    // console.log(task);
    dispatch({
      type: "ADD_TASK",
      payload: { ...task, id: v4() },
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };
  return (
    <GlobalContext.Provider value={{ ...state, addTask, deleteTask }}>
      {children}
    </GlobalContext.Provider>
  );
};
