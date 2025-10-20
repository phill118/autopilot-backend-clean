import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import shopify from "./shopify.js"; // ✅ use shopify.js (NOT shopify-test.js)

dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());

// Health/status
app.get("/api/status", (_req, res) => res.json({ ok: true }));

// ✅ Mount the real Shopify router
app.use("/api/shopify", shopify);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
