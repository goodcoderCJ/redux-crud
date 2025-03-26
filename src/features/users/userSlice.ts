import { v4 as uuidv4 } from "uuid";
import { Action } from "redux";

export interface User {
  id: string;
  name: string;
}

interface AddItemAction extends Action {
  type: "ADD_ITEM";
  payload: string;
}

interface UpdateItemAction extends Action {
  type: "UPDATE_ITEM";
  payload: { id: string; name: string };
}

interface DeleteItemAction extends Action {
  type: "DELETE_ITEM";
  payload: string;
}

export type ItemActions = AddItemAction | UpdateItemAction | DeleteItemAction;

const addUser = (name: string): AddItemAction => ({ type: "ADD_ITEM", payload: name });
const updateUser = (id: string, name: string): UpdateItemAction => ({ type: "UPDATE_ITEM", payload: { id, name } });
const deleteUser = (id: string): DeleteItemAction => ({ type: "DELETE_ITEM", payload: id });

const loadState = (): User[] => {
  const savedState = localStorage.getItem("items");
  return savedState ? JSON.parse(savedState) : [];
};

const saveState = (state: User[]) => {
  localStorage.setItem("items", JSON.stringify(state));
};

const userReducer = (state: User[] = loadState(), action: ItemActions): User[] => {
  let newState;
  switch (action.type) {
    case "ADD_ITEM":
      newState = [...state, { id: uuidv4(), name: action.payload }];
      break;
    case "UPDATE_ITEM":
      newState = state.map((item) =>
        item.id === action.payload.id ? { ...item, name: action.payload.name } : item
      );
      break;
    case "DELETE_ITEM":
      newState = state.filter((item) => item.id !== action.payload);
      break;
    default:
      return state;
  }
  saveState(newState);
  return newState;
};

export { addUser, updateUser, deleteUser } 
export default userReducer;
