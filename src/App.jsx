import { Route, Routes } from "react-router-dom";
import CommunityPage from "./Components/CommunityPage";
import CommunityPostPage from './components/CommunityPostPage'
import LaunchPage from "./Components/LaunchPage";
import LoginPage from './components/LoginPage'

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<LaunchPage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<CommunityPage />} path="/community" />
        <Route element={<CommunityPostPage />} path="/post"/>
      </Routes>
    </div>
  );
}

export default App;
