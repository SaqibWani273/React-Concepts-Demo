export function Todo({props}){
    // console.log(`props -> ${props}`
    const todos=props.todos
    return <div>
       {
        todos.map(function(todo){
            return <div>
                <h1> {todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.done==true?"Completed":"Mark as Done"}</button>
            </div>
        } )
       }
    </div>
}