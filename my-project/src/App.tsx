import { Login } from "./Login/Login";
import { UserHomePage } from "./UserHomePage/UserHomePage"
function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      {/* <UserHomePage /> */}
      <Login />
    </div>
  )
}

export default App
