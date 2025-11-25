// frontend/src/pages/Login.jsx
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAuth = async (endpoint) => {
    setLoading(true);
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/${endpoint}`, form);
      if (endpoint === "login") {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/";
      } else {
        alert("🎉 Akun berhasil dibuat! Silakan login.");
      }
    } catch (err) {
      alert("Gagal. Cek username/password.");
    }
    setLoading(false);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <div style={{ fontSize: "3rem", marginBottom: "10px" }}>⚡</div>
        <h2 style={{ marginBottom: "5px", color: "#1e293b" }}>Welcome Back</h2>
        <p style={{ color: "#64748b", marginBottom: "30px" }}>Kelola laporan fasilitas dengan mudah</p>

        <input name="username" placeholder="Username" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />

        <div style={{ display: "grid", gap: "10px", marginTop: "10px" }}>
          <button className="btn btn-primary" onClick={() => handleAuth("login")} style={{justifyContent:'center'}}>
            {loading ? "Memproses..." : "Masuk Sekarang"}
          </button>
          <button className="btn btn-outline" onClick={() => handleAuth("register")} style={{justifyContent:'center'}}>
            Buat Akun Baru
          </button>
        </div>
      </div>
    </div>
  );
}