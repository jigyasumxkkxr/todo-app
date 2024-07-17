/*
    {todos}={
    todos:[{
    title:"",
    description:""
    },{},{}]
    (array of state)
    }
*/



export function Todos({todos}){
    
    return (
        <div>
            {todos.map((todo)=>{
                return(
                    <div>
                        <h1 style={{
                            marginTop:10,
                            marginBottom:0
                        }}>{todo.title}</h1>
                        <h3 style={{
                            marginTop:0,
                            marginBottom:10
                        }}>{todo.description}</h3>
                        <button onClick={click()}>{todo.completed == true ? "Done" : "Mark as Done"}</button>
                    </div>
                )
            })}
        </div>
    )
}