import { BrowserRouter } from "react-router-dom";
import CommPostDetail from "./Components/CommPostDetail";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <CommPostDetail />
    </div>
    </BrowserRouter>
  );
}

export default App;
