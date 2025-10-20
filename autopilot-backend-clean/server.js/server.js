import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import shopifyRouter from "./shopify.js";

dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use("/api/shopify", shopifyRouter);

app.get("/api/status", (_req, res) => res.json({ ok: true }));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
