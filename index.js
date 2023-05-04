const express=require('express')
const app=express()
const port=8080
const path=require("path")


const mainpath =path.join(__dirname,"./public")

app.use(express.static(mainpath))
app.get('/', (req, res) => {
  res.send('hello')
})




app.listen(port,()=>{
    console.log('server is running');
})
