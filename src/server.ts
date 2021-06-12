import express = require("express");
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();
app.use(express.json());

// Routes
app.use(categoriesRoutes);



app.listen(3333, () => console.log("Server is running"));
