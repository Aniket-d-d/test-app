const express = require('express');
//const bodyParser = require('body-parser');
const elasticsearch = require('elasticsearch');
//const cors = require('cors');
const router = express.Router();

const client = new elasticsearch.Client( {  
    hosts: [
      'https://localhost:9200/',
      'http://localhost:9200/'
    ]
  });

const PORT = 4200;

const app = express();

//app.use(bodyParser.json());

//app.use(cors())

//app.use(express.static(path.join(__dirname,'./app/signup')));

router.post('/signup',(req, res) =>{
    client.index({  
        index: 'login',
        body: {
          "UserName": req.body.username,
          "Password": req.body.password,
        }
      },function(err,resp,status) {
          if(err){
              console.log(err);
          } else {
              return res.status(200).send({
                  message: "POST call succeeded"
              })
          }
      })
      return res.status(200).send({
        message: "POST call succeeded"
      });
})

app.listen(PORT, function(){
    console.log("Server running on localhost: " + PORT);
});