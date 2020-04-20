export interface Item {
  id: number;
  name: string;
}

export interface InventoryState {
  items: Item[];
}

export const REMOVE_ITEM_FROM_INVENTORY = "REMOVE_ITEM_FROM_INVENTORY";
export const ADD_ITEM_TO_INVENTORY = "ADD_ITEM_TO_INVENTORY";

interface RemoveItemFromInventory {
  type: typeof REMOVE_ITEM_FROM_INVENTORY;
  payload: number;
}

interface AddItemToInventory {
  type: typeof ADD_ITEM_TO_INVENTORY;
  payload: Item;
}

export type InventoryActionTypes = RemoveItemFromInventory | AddItemToInventory;

export interface Task {
  id: number;
  taskDetail: string;
}

export interface TaskListState {
  taskList: Task[];
}

export const REMOVE_TASK_FROM_LIST = "REMOVE_TASK_FROM_LIST";
export const ADD_TASK_TO_LIST = "ADD_TASK_TO_LIST";

interface RemoveTaskFromList {
  type: typeof REMOVE_TASK_FROM_LIST;
  payload: number;
}

interface AddTaskToList {
  type: typeof ADD_TASK_TO_LIST;
  payload: Task;
}

export type TodoActionTypes = RemoveTaskFromList | AddTaskToList;
