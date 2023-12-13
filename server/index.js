const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 5050;

// build 파일 참조
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    mongoose
        .connect(
            'mongodb+srv://ppiyoxia1215:ppiyoxia1215@cluster0.ejlg0vf.mongodb.net/blog?retryWrites=true&w=majority'
        )
        .then(() => {
            console.log("listening -->" + port);
            console.log("mongoose --> connecting");
        })
        .catch((err) => {
            console.log(err);
        })
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});