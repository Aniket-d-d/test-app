const express = require("express");
const bodyParser = require("body-parser").json();
const elasticsearch = require("elasticsearch");
//const cors =  require('cors');
const app = express();

app.use(bodyParser);
//app.use(
//    bodyParser.urlencoded({
//        extended: true,
//    })
//);
//app.use(cors());

const esClient = elasticsearch.Client({
    host: "http://localhost:9200/",
})

app.post("/signup", (req, res) => {
    esClient.index({
        index: 'login',
        body: {
            "Username": req.body.username,
            "Password": req.body.password,
        }
    })
    .then(response => {
        return res.json({"message": "Indexing successful"})
    })
    .catch(err => {
         return res.status(500).json({"message": "Error"})
    })
});

app.listen(process.env.PORT || 3000, () => {
    console.log("connected")
})