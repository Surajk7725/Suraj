const express=require('express')
const movies=require('./Movies')
const app=express();
//call back function
app.get('/', (req, res) => res.send('npm run dev '))
app.get('/api/movies',(req,res)=>res.json(movies));
app.listen(3982, () => console.log('Server ready'));