import { Routes, Route } from "react-router-dom"
import './App.css'
import LoginPage from './components/LoginPage'
import CommunityPostPage from './components/CommunityPostPage'
import LaunchPage from "./Components/LaunchPage";
function App() {

  return (
    <div>
      <Routes>
      <Route element={<LaunchPage />} path="/"/>
        <Route element={<LoginPage />} path="/login"/>
        <Route element={<CommunityPostPage />} path="/post"/>
      </Routes>
    </div>
  );
}

export default App;

