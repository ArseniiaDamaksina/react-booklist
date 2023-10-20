import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import BooklistsPage from "./pages/BooklistsPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booklists" element={<BooklistsPage />} />
      </Routes>
    </Router>
  );
};

export default App;