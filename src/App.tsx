


import  { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App: React.FC = () => {
  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mt-[0.9rem]">CRUD APP WITH REDUX AND TYPESCRIPT</h1>
      <UserForm editingId={editingId} setEditingId={setEditingId} />
      <UserList setEditingId={setEditingId} />
    </div>
  );
};

export default App
