const express = require('express')
const bodyParser = require('body-parser')
const elasticsearch = require('elasticsearch')
//const cors = require('cors');
//const router = express.Router();

const esClient = new elasticsearch.Client( {  
    host: [
      'https://localhost:9200/',
      'http://localhost:9200/'
    ]
  })

const PORT = 4200;

const app = express()

app.use(bodyParser).json()

//app.use(cors())

//app.use(express.static(path.join(__dirname,'./app/signup')));

app.post("/signup", (req, res) => {
  esClient.index({
      index: 'signups',
      body: {
          "UserName": req.body.username,
          "Password": req.body.password,
      }
  })
  .then(response => {
      return res.json({"message": "Indexing successful"})
  })
  .catch(err => {
       return res.status(500).json({"message": "Error"})
  })
})

app.listen(PORT, function(){
    console.log(`Server running on localhost: ${PORT}`);
});