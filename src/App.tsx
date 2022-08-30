import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";
import Login from "./Login";

export type IUser = {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  phone_no: string;
  email: string;
  status: string;
  profile_image: string;
  created_at: null;
};

const App = () => {
  const [user, setUser] = useState<IUser>();

  return (
    <div className="App">
      <div className="ellipse22" />
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
