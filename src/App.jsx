import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home";
import Comments from "./components/pages/Comments/Comments";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact /> } />
      </Route>
    </Routes>
  );
}

export default App;
