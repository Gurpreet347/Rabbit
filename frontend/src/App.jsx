import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
const App = () => {
   return (
     <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
     <Toaster position="top-right"/>
      <Routes>
        <Route path="/" element={<UserLayout/>}> {/* User Layout */}
          <Route index element={<Home/>}>{/* Admin Layout */}</Route>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   );
}
export default App;
