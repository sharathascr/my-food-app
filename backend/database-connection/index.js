import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
dotenv.config({ path: path.join(projectRoot, ".env") });

export default async function connectDB() {
  // eslint-disable-next-line no-undef
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("MONGODB_URI is missing from the project root .env file");
  }

  await mongoose.connect(mongoUri);
  console.log("DB connection successful");
}
