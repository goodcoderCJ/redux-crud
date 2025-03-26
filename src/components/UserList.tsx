
import { useDispatch, useSelector } from "react-redux";
import { deleteUser,User,ItemActions  } from "../features/users/userSlice";
import {  Dispatch } from "redux";

const UserList: React.FC<{ setEditingId: (id: string | null) => void }> = ({ setEditingId }) => {
  const dispatch: Dispatch<ItemActions> = useDispatch();
  const users = useSelector((state: User[]) => state);

  return (
    <ul className="mt-[1.5rem]">
      {users.map((user) => (
        <li key={user.id} className="flex justify-between border border-gray-800 p-2 rounded-[5px] mb-[1rem]">
          <p className="self-center">{user.name}</p>
          <div>
            <button
              onClick={() => setEditingId(user.id)}
              className="bg-yellow-500 text-white p-2 mx-1 rounded-[5px]"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteUser(user.id))}
              className="bg-red-500 text-white p-2 rounded-[5px]"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
