// server.js

// 1. Import modules using the ES6 'import' syntax
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// 2. Recreate __dirname for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an express application
const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
