import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavLayout from "./layout-route/NavLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Quiz from "./pages/Quiz";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NavLayout />}>
            <Route index element={<Home />} />
            <Route path="category" element={<Category />} />
          </Route>
          <Route path="/quiz/:category/:difficulty" element={<Quiz />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
