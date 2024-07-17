const zod=require("zod")
/*
    post{
        title:String,
        description:String
    }
    put{
        id:String
    }
*/
const createTodo=zod.object({
    title:zod.string(),
    description:zod.string()
})

const updateTodo=zod.object({
    id:zod.string()
})

module.exports={
    createTodo: createTodo,
    updateTodo: updateTodo
}