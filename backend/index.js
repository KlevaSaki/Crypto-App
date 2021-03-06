import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("Home route reached")
})


app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));