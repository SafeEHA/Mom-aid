import LaunchPage from "./Components/LaunchPage";
import CommunityPage from "./Components/CommunityPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="container">
      <Routes>
        <Route element={<LaunchPage />} path="/"/>
        <Route element={<CommunityPage />} path="community"/>
      </Routes>
    </div>
  );
}

export default App;
