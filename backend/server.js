import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/connector.db.js";
import formRouter from "./routes/form.route.js";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 8090;

app.use(cors({origin:'http://localhost:5173'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true , limit: "50mb"}));
app.use('/form', formRouter);


app.get("/", (req, res) => {
  res.send("Server is ready");
});

connectDb()
  .then(
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    })
  )
  .catch((err) => {
    console.error(err);
  });
