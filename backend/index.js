import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sendRouter from "./routes/send.js"; // use .js if you are using "type": "module" in package.json

// Initialize environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", sendRouter);

// Home Route (optional)
app.get("/", (req, res) => {
  res.send("Portfolio Mail Server is Running ✅");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
