import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import ManageAccount from "./Layout/ManageAccount";
import ManageTimekeeping from "./Layout/ManageTimekeeping";
import Calendar from "./Layout/Calendar";
import { Login } from "./Login/Login";
// import Dashboard from "./Layout/Dashboard";

function App() {
  return (
    <BrowserRouter>
      {/* Route đăng nhập */}

      <Routes>
        {/* Route gốc */}
        <Route path="/" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<ManageAccount />} />
          <Route path="/manageaccount" element={<ManageAccount />} />
          <Route path="/managetimekeeping" element={<ManageTimekeeping />} />
          <Route path="/calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
