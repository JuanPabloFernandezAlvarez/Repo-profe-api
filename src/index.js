import express from "express";
import { PORT } from "./config.js";
import bookRoutes from "./routes/books.routes.js";
import { sequelize } from "./db.js";

const app = express();

try {
  app.listen(PORT);
  app.use(bookRoutes);

  await sequelize.authenticate();

  console.log(`Server listening in port: ${PORT}`);
} catch (error) {
  console.log(`There was an error on initialization`);
}
