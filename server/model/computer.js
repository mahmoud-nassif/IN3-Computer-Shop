let mongoose=require("mongoose");
let computerSchema=new mongoose.Schema({

    Company:{type:String,required:true},

    Product:{type:String,required:true},

    Type:{type:String,required:true},

    Inches:{type:Number,required:true},

    Resolution:{type:String,required:true},

    CPU:{type:String,required:true},

    RAM:{type:String,required:true},

    Memory:{type:String,required:true},

    Graphics:{type:String,required:true},
    OpSys:{type:String,required:true},
    Weight:{type:String,required:true},
    Price:{type:Number,required:true},
})

module.exports=mongoose.model("computers",computerSchema);