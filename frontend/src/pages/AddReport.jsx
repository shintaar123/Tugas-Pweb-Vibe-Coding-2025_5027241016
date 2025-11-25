// frontend/src/pages/AddReport.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddReport() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    if (file) formData.append("image", file);

    try {
      await axios.post("http://localhost:5000/api/reports", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/");
    } catch { alert("Gagal kirim data"); }
  };

  return (
    <div className="auth-wrapper" style={{ minHeight: "80vh", alignItems: 'flex-start', paddingTop: '50px' }}>
      <div className="auth-box" style={{ maxWidth: "600px", textAlign: "left" }}>
        <h2 style={{ marginBottom: "20px", textAlign: 'center' }}>📝 Form Laporan</h2>
        
        <form onSubmit={handleSubmit}>
          <label style={{fontWeight: 'bold', display: 'block', marginBottom: '8px'}}>Judul Kerusakan</label>
          <input onChange={(e) => setTitle(e.target.value)} required placeholder="Contoh: Kursi Patah di R.102" />

          <label style={{fontWeight: 'bold', display: 'block', marginBottom: '8px'}}>Deskripsi Lengkap</label>
          <textarea onChange={(e) => setDesc(e.target.value)} required rows="5" placeholder="Jelaskan kronologi atau kondisi detail..." />

          <label style={{fontWeight: 'bold', display: 'block', marginBottom: '8px'}}>Upload Bukti Foto</label>
          <div style={{border: '2px dashed #cbd5e1', padding: '20px', borderRadius: '12px', textAlign: 'center', marginBottom: '20px', cursor: 'pointer', background: '#f8fafc'}}>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} style={{border: 'none', background: 'transparent', padding: 0, margin: 0}} />
          </div>

          <div style={{ display: "flex", gap: "15px" }}>
            <button type="submit" className="btn btn-primary" style={{ flex: 1, justifyContent: "center" }}>Kirim Laporan 🚀</button>
            <button type="button" className="btn btn-outline" style={{ flex: 1, justifyContent: "center" }} onClick={() => navigate("/")}>Batal</button>
          </div>
        </form>
      </div>
    </div>
  );
}