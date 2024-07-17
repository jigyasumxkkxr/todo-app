const mongoose=require("mongoose")
/*
    Todo:{
        title:String,
        description:String,
        completed:boolean
    }
*/
mongoose.connect("mongodb+srv://jigyasumakkxr:2VTC4eCSCfxFW3jJ@cluster0.e5vumlw.mongodb.net/todo-app")

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todos',todoSchema)

module.exports={
    todo
}