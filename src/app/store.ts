import { createStore } from "redux";
import userReducer from "../features/users/userSlice";


export const store = createStore(userReducer);

;
