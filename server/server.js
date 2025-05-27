let express = require('express');
let app = express();
let port = 2010;
let dbconnection = require('./db');
const cors = require('cors');
 dotenv = require('dotenv');
const stripeRoutes = require('./Routers/PaymentIntentroute');
dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/api/cars/', require('./Routers/carrouter'));
app.use('/api/users/', require('./Routers/userroute'));
app.use('/api/bookings/',require('./Routers/bookingrouter'));
app.use('/api/stripe', stripeRoutes);
app.use('/api/bookings',require('./Routers/bookingrouter'))

const path= require('path')
if(process.env.NODE_ENV==="production"){
  app.use('/',express.static('clint/build'))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'clint/build/index.html'))
  })
}
app.get('/', (req, res) => {
  res.send("hello");
});

app.listen(port, () => console.log(`server is ready on ${port}`));
