const express=require("express")
const app=express()
const {createTodo,updateTodo}=require("./types")
const {todo}=require("./mongodb.js")
const cors=require("cors")
app.use(express.json())
app.use(cors())

app.post("/todo",async (req,res)=>{
    try{
        const createPayload=req.body
        const parsedPayload=createTodo.safeParse(createPayload)
        if(!parsedPayload.success){
            res.status(400).json({
                message:"Wrong Inputs Recieved (Bad Request)"
            })
        }else{
            await todo.create({
                title:createPayload.title,
                description:createPayload.description,
                completed:false
            })
            res.status(200).json({
                message:"Todo Created"
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
})

app.get("/todos",async (req,res)=>{
    try{
        const todos=await todo.find({})
        res.status(200).json({
            todos
        })
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
})

app.put("/completed",async (req,res)=>{
    try {
        const updatePayload=req.body
        const parsedPayload=updateTodo.safeParse(updatePayload)
        if(!parsedPayload.success){
            res.status(400).json({
                message:"Wrong Inputs Recieved (Bad Request)"
            })
        }else{
            await todo.updateOne({
                _id:req.body.id
            },{$set:{
                completed:true
            }})
            res.status(200).json({
                message:"Todo Marked as Completed"
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
})

app.use((req,res)=>{
    res.status(404).json({
        message:"Not Found"
    })
})

const PORT=3000
app.listen(PORT,()=>{
    console.log(`App Listening at ${PORT}`)
})