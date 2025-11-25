// frontend/src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/reports").then((res) => setReports(res.data));
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Yakin ingin menyelesaikan laporan ini?")) {
      await axios.delete(`http://localhost:5000/api/reports/${id}`);
      window.location.reload();
    }
  };

  return (
    <div className="container">
      <nav>
        <h1>⚡ VibeReport</h1>
        <button className="btn btn-outline" onClick={() => { localStorage.clear(); window.location.href = "/login"; }}>
          Log Out
        </button>
      </nav>

      <div style={{ textAlign: "center", marginBottom: "50px", padding: "40px 0" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Lapor Fasilitas Rusak</h2>
        <p style={{ color: "#64748b", maxWidth: "600px", margin: "0 auto 30px" }}>
          Temukan kerusakan? Jangan diam saja. Laporkan sekarang agar segera diperbaiki oleh tim terkait.
        </p>
        <Link to="/add">
          <button className="btn btn-primary" style={{ padding: "15px 40px", fontSize: "1.1rem" }}>
            + Buat Laporan Baru
          </button>
        </Link>
      </div>

      <div className="grid">
        {reports.map((item) => (
          <div key={item._id} className="card">
            {item.image ? (
              <img src={`http://localhost:5000/uploads/${item.image}`} alt="Bukti" />
            ) : (
              <div style={{ height: "220px", background: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8" }}>
                📸 Tidak ada foto
              </div>
            )}
            <div className="card-body">
              <span className="date-badge">📅 {new Date(item.createdAt).toLocaleDateString()}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className="btn btn-danger" style={{ width: "100%", justifyContent: "center" }} onClick={() => handleDelete(item._id)}>
                🗑️ Hapus / Selesai
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {reports.length === 0 && (
        <div style={{textAlign: 'center', marginTop: '50px', color: '#94a3b8'}}>
            <p>✨ Belum ada laporan. Kampus aman terkendali!</p>
        </div>
      )}
    </div>
  );
}