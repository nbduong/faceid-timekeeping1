import { Login } from "./Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import ManageAccount from "./Layout/ManageAccount";
import ManageTimekeeping from "./Layout/ManageTimekeeping";
import Calendar from "./Layout/Calendar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ManageAccount />} />
          <Route path="manageaccount" element={<ManageAccount />} />
          <Route path="managetimekeeping" element={<ManageTimekeeping />} />
          <Route path="calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="flex h-screen w-full items-center justify-center bg-white">
    //   <UserHomePage />
    //   {/* <Login /> */}
    // </div>
  );
}

export default App;
