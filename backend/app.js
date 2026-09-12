import express from "express";
import connectDB from "./database-connection/index.js";
import authRouter from "./routes/auth.js";
import collectionsRouter from "./routes/collections.js";
import cartReducer from "./routes/cart.js"
import process from "process";
import restaurantRouter from "./routes/restaurant.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const allowedOrigins = ["http://localhost:5173"];

const app = express();
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", restaurantRouter);
app.use("/", collectionsRouter);
app.use("/", cartReducer)

// eslint-disable-next-line no-unused-vars
app.use("/", (err, req, res, next) => {
  res.status(400).send({
    success: false,
    errMessage: err.message,
  });
});

async function startServer() {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log("Server is listening on ", process.env.PORT);
    });
  } catch (err) {
    console.error("Database connection Failed: ", err.message);
    process.exit(1);
  }
}

startServer();
