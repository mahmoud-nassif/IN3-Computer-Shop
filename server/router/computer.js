let express=require("express");
let computerRouter=express.Router();
let mongoose=require("mongoose");
let computerSchema=require("../model/computer")


computerRouter.get("/all",(req,res)=>{
  computerSchema.find({},(err,data)=>{
    if(!err)res.send(data)
  })
})

computerRouter.get("/page",(req,res)=>{
  let offset=req.query.offset;
  let limit=req.query.limit;
  computerSchema.find().skip(parseInt(offset,0)).limit(parseInt( limit,0)).exec((err,data)=>{
    if(!err)res.send(data)
  })
})

computerRouter.get("/count",(req,res)=>{
  computerSchema.count({},(err,count)=>{
    if(!err)res.send({count})
  })
})

computerRouter.get("/search",(req,res)=>{
  let value=req.query.value;
  let offset=req.query.offset;
  let limit=req.query.limit;
  computerSchema.find({$or:[{Company: { $regex: new RegExp(value), $options: 'i' }},
                            {Product: { $regex: new RegExp(value), $options: 'i' }}]})
                            .skip(parseInt(offset,0))
                            .limit(parseInt(limit,0))
                            .exec((err,data)=>{
                             if(!err)res.send(data)
  })
})

computerRouter.get("/search/count",(req,res)=>{
  let value=req.query.value;
  computerSchema.find({$or:[{Company: { $regex: new RegExp(value), $options: 'i' }},
  {Product: { $regex: new RegExp(value), $options: 'i' }}]}).count()
                                                             .exec((err,count)=>{
                                                              if(!err)res.send({count})
                                                             })

})

computerRouter.get("/filter",(req,res)=>{//for (and) filteration bet not used
  let cpu=req.query.cpu;
  let ram=req.query.ram;
  let ops=req.query.ops;
  let inch=req.query.inch;
  console.log(cpu,ram,ops,inch)
  computerSchema.find({CPU:cpu,RAM:ram,OpSys:ops,Inches:inch},(err,data)=>{
    console.log(data)
    if(!err)res.send(data)
  })
})

computerRouter.get("/filter/cpu",(req,res)=>{
  let cpu=req.query.cpu;
  computerSchema.find({CPU:cpu},(err,data)=>{
    console.log(data)
    if(!err)res.send(data)
  })
})

computerRouter.get("/filter/ram",(req,res)=>{
  let ram=req.query.ram;
  computerSchema.find({RAM:ram},(err,data)=>{
    console.log(data)
    if(!err)res.send(data)
  })
})

computerRouter.get("/filter/ops",(req,res)=>{
   let ops=req.query.ops;
  computerSchema.find({OpSys:ops},(err,data)=>{
    console.log(data)
    if(!err)res.send(data)
  })
})

computerRouter.get("/filter/inch",(req,res)=>{
   let inch=req.query.inch;
  computerSchema.find({Inches:inch},(err,data)=>{
    console.log(data)
    if(!err)res.send(data)
  })
})

computerRouter.get("/one",(req,res)=>{
  let id=req.query.id;
  computerSchema.findOne({_id:id},(err,data)=>{
    if(!err)res.send(data)
  })
})
module.exports=computerRouter;