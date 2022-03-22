import React from "react";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import TranslationPage from "./pages/TranslationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/translate" element={<TranslationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
