const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./src/routes/routes')
const path = require('path')


//create new instance of express
const app = express();
const PORT = 5151;  //server port



//middleware
app.use(bodyParser.json());
app.use(cors({
    origin : '*'
}))
//add public folder to the client 
app.use(express.static(path.join(__dirname, './src/public')));

//use routes
app.use('/api', routes)

//default application root
app.get('/', (req, res) => {
    res.sendFile('index.html', err => {
        if (err) {
          res.status(403).send('error index.html not found');
        }
      });
})


//handle wrong url requests
app.use((req, res) => {
    res.status(404).send('Not Found');
  });


  //start app on this port
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

