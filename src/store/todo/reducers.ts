import {
  TaskListState,
  TodoActionTypes,
  ADD_TASK_TO_LIST,
  REMOVE_TASK_FROM_LIST,
} from "./types";

const initialState: TaskListState = {
  taskList: [
    {
      id: 1,
      taskDetail: "Cake",
    },
    {
      id: 2,
      taskDetail: "Pizza",
    },
  ],
};

export function todoReducer(state = initialState, action: TodoActionTypes) {
  switch (action.type) {
    case REMOVE_TASK_FROM_LIST:
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.payload),
      };

    case ADD_TASK_TO_LIST:
      return {
        ...state,

        taskList: [...state.taskList, action.payload],
      };

    default:
      return state;
  }
}
