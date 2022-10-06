export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "DONE_TASK":
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            task.done = !task.done;
          }
          return task;
        }),
      };
    default:
      break;
  }
  return {
    tasks: [...state.tasks, action.payload],
  };
}
