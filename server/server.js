require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");


// middleware
app.use(cors());
app.use(express.json());

// get all titles
app.get("/api/snowboards", async (req, res) => {
    try {
        const allSnowboards = await db.query("SELECT * FROM snowboards");
        res.json(allSnowboards.rows);
    } catch (err) {
        console.error(err.message); 
    }
});

const port = process.env.PORT || 4001;
app.listen(port, () => {
    console.log("server has started");
});
