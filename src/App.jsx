import { Route, Routes } from "react-router-dom";
import CommunityPage from "./Components/CommunityPage";
import LaunchPage from "./Components/LaunchPage";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route element={<LaunchPage />} path="/" />
        <Route element={<CommunityPage />} path="/community" />
      </Routes>
    </div>
  );
}

export default App;
