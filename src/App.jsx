import { Route, Routes } from "react-router-dom";
import CommunityPostDetail from "./Components/CommPostDetail";
import CommunityPage from "./Components/CommunityPage";
import CommunityPostPage from "./Components/CommunityPostPage"; 
import LaunchPage from "./Components/LaunchPage";
import LoginPage from './Components/LoginPage';
import PostReply from "./components/PostReply";
// import { PostProvider } from "./src/context/PostContext";

import "./App.css";
import PostProvider from "./context/PostContext";
import Article from "./Components/Article";

function App() {
  return (
    <div>
      <PostProvider>
      <Routes>
        <Route element={<LaunchPage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<CommunityPage />} path="/community" />
        <Route element={<CommunityPostPage />} path="/post" />
        <Route element={<CommunityPostDetail />} path="/post-detail" />
        <Route element={<PostReply />} path="modal"/>
        <Route element={<Article />} path="/article" />
      </Routes>
      </PostProvider>
    </div>
  );
}

export default App;
