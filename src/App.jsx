import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home";
import Comments from "./components/pages/Comments/Comments";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/comments" element={<Comments /> } />
      </Route>
    </Routes>
  );
}

export default App;
