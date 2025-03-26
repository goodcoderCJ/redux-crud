
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useState } from "react";
import { ItemActions } from "../features/users/userSlice"

import { addUser, updateUser } from "../features/users/userSlice";

const UserForm: React.FC<{ editingId: string | null; setEditingId: (id: string | null) => void }> = ({ editingId, setEditingId }) => {
  const dispatch: Dispatch<ItemActions> = useDispatch();
  const [name, setName] = useState<string>("");

  const handleAddOrUpdate = () => {
    if (editingId) {
      dispatch(updateUser(editingId, name));
      setEditingId(null);
    } else {
      dispatch(addUser(name));
    }
    setName("");
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row md:flex-row my-5">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-[5px] border-gray-800 p-2 border outline-0"
      />
      <button onClick={handleAddOrUpdate} className="bg-blue-500 text-white p-2 flex-1 sm:flex-0 md:flex-0 rounded-[5px]">
        {editingId ? "Update" : "Add"}
      </button>
    </div>
  );
};


export default UserForm;
