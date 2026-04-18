import express from "express";
import userRoutes from "./user.routes";

const app = express();
const PORT = 3000;

// Middleware pour lire JSON
app.use(express.json());

// Routes
app.use("/api", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API fonctionne !");
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});

export default app;