// backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Import Models
const User = require('./models/User');
const Report = require('./models/Report');

const app = express();
const PORT = process.env.PORT || 5000;

// --- A. CEK FOLDER UPLOADS ---
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
    console.log("📁 Folder 'uploads' berhasil dibuat otomatis!");
}

// --- B. MIDDLEWARE ---
app.use(cors());
app.use(express.json());
// Agar gambar bisa diakses frontend
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --- C. KONEKSI MONGODB ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected (Siap)'))
  .catch(err => console.error('❌ Gagal Connect MongoDB:', err));

// --- D. CONFIG UPLOAD (MULTER) ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// --- E. ROUTES (API) ---

// 1. Register
app.post('/api/auth/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({ username: req.body.username, password: hashedPassword });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) { res.status(500).json(err); }
});

// 2. Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(404).json("User not found");
    
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json("Wrong password");
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ token, user });
  } catch (err) { res.status(500).json(err); }
});

// 3. Tambah Laporan (Create)
app.post('/api/reports', upload.single('image'), async (req, res) => {
  const newReport = new Report({
    title: req.body.title,
    description: req.body.description,
    image: req.file ? req.file.filename : null,
  });
  try {
    const savedReport = await newReport.save();
    res.status(200).json(savedReport);
  } catch (err) { res.status(500).json(err); }
});

// 4. Ambil Semua Laporan (Read)
app.get('/api/reports', async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.status(200).json(reports);
  } catch (err) { res.status(500).json(err); }
});

// 5. Hapus Laporan (Delete)
app.delete('/api/reports/:id', async (req, res) => {
  try {
    await Report.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) { res.status(500).json(err); }
});

app.listen(PORT, () => console.log(`🚀 Server berjalan di http://localhost:${PORT}`));