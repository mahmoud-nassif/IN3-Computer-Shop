let express=require("express");
let app=express();
let mongoose=require("mongoose");
let cors=require("cors")
let computerRouter=require("./router/computer")

mongoose.connect("mongodb://localhost:27017/in3")
app.use(cors())

app.use("/computer",computerRouter)

app.use((req, res) => {
    res.status(404).send("Not Found");
});


app.listen(3000,()=>{
    console.log("server listens now")
})