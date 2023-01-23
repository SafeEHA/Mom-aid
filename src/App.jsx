import { Route, Routes } from "react-router-dom";
import CommunityPostDetail from "./Components/CommPostDetail";
import CommunityPage from "./Components/CommunityPage";
import CommunityPostPage from "./components/CommunityPostPage";
import LaunchPage from "./Components/LaunchPage";
import LoginPage from './components/LoginPage'
import PostReply from "./components/PostReply";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<LaunchPage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<CommunityPage />} path="/community" />
        <Route element={<CommunityPostPage />} path="/post" />
        <Route element={<CommunityPostDetail />} path="/post-detail" />
        <Route element={<PostReply />} path="modal"/>
      </Routes>
    </div>
  );
}

export default App;
