export function CreateTodo(){
    return <div>
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="title" /> <br /><br />
        <input style={{
            padding:10,
            margin:10
        }}  type="text" placeholder="description" /><br /> <br />
        <button style={{
            padding:10,
            margin:10,
            color:"white",
            backgroundColor:"purple",
            borderColor:"transparent"
        }} >Add todo</button>
    </div>
}