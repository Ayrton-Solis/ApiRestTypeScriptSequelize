import express from "express";
const app = express();
import closetRoutes from "./routes/closet.reutes"


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(closetRoutes);



export default app;
