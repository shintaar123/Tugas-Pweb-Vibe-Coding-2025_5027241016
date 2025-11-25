import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddReport from "./pages/AddReport";

export default function App() {
  // Cek apakah user sudah login (punya token)
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Jika belum login, tendang ke halaman login */}
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/add" element={isAuthenticated ? <AddReport /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}