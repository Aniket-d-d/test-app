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
            "_id": req.body._id,
            "name": req.body.name,
            "ratings": req.body.ratings,
        }
    })
    .then(response => {
        return res.json({"message": "Indexing successful"})
    })
    .catch(err => {
         return res.status(500).json({"message": "Error"})
    })
});

app.listen(process.env.PORT || 4200, () => {
    console.log("connected")
})