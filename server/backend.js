require('dotenv').config()

const express = require ('express')
const app=express()

app.use(express.static('public'))


app.get('/',(req,res)=>{
res.sendFile('./page/snake.html',{root:__dirname})
// res.send('1sdds23')
})

app.listen(process.env.PORT || 5000,()=>{

 console.log('listening...')
})

