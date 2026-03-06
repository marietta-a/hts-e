import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("database.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS newsletter (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/contact", (req, res) => {
    const { name, email, phone, message } = req.body;
    try {
      const stmt = db.prepare("INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)");
      stmt.run(name, email, phone, message);
      res.json({ success: true, message: "Message received" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error saving message" });
    }
  });

  app.post("/api/newsletter", (req, res) => {
    const { email } = req.body;
    try {
      const stmt = db.prepare("INSERT INTO newsletter (email) VALUES (?)");
      stmt.run(email);
      res.json({ success: true, message: "Subscribed" });
    } catch (error: any) {
      if (error.code === 'SQLITE_CONSTRAINT') {
        return res.json({ success: true, message: "Already subscribed" });
      }
      console.error(error);
      res.status(500).json({ success: false, message: "Error subscribing" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
