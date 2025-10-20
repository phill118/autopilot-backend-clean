import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import shopify from "./shopify.js"; // ✅ use the real Shopify router

// Load environment variables
dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());

// Health/status endpoint
app.get("/api/status", (_req, res) => res.json({ ok: true }));

// Mount Shopify router
app.use("/api/shopify", shopify);

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("==============================================");
  console.log(`✅ Server running on port ${port}`);
  console.log(`🌍 App URL: ${process.env.SHOPIFY_APP_URL}`);
  console.log("==============================================");
});
