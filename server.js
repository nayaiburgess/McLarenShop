let express = require('express');
let app = express();
const routes=require('./routes/index') 

app.use(express.static(__dirname +'/client/build/'))
app.get('/', (req, res) => {
  res.send("hello world");
});

//this is where we use our middleware
app.use(express.urlencoded({ extended:true }))
app.use(express.json()) 
app.use(express.static(__dirname+'/client/build/')) 
app.get('/', (req, res) => { res.sendFile(__dirname+'/client/build/index.html')}) 
app.use('/', routes) 
 
app.listen(PORT, () => 
{ console.log(`Server is listening on PORT: ${PORT}`) })


const PORT=process.env.PORT||3001