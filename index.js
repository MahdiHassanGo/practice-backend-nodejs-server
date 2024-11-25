const express = require('express');
var cors = require('cors')


const app = express();
const port = process.env.PORT ||3000;

const users=[
    {
        id:1,name:'mahdi',email:'m@gmail.com',
      
    },{
        id:2,name:'hassan',email:'h@gmail.com',
       
    },
    {
        id:3,name:'noor',email:'n@gmail.com',
    }
]

app.use(cors());

app.get('/', (req, res) => {
    res.send('Users Management server is running  ')
  })

app.get('/users', (req, res) => {
    res.send(users)
  })

  app.post('/users',(req,res)=>{
    console.log(req.body);
  })

  app.listen(port ,()=>{
    console.log(`server is running on PORT:${port}`)
  })


