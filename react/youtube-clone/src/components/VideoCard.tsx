
export function VideoCard( otherProps:any)  {
    return <div >
        <img src={otherProps.image} alt="image"></img>
        <div className="grid grid-cols-10 gap-2 pt-6">
            <div  className="col-span-1 rounded-xl">
            <img className="rounded-full w-10 h-10 pl-2"  src={otherProps.image} alt="image"/>
        
            </div>
            <div className="col-span-8">

        <div >{otherProps.title}</div>
        <div className="text-gray-400" >{otherProps.subtitle}</div>
        <div className="text-gray-400">{otherProps.views} . {otherProps.date}</div>
            </div>
        </div>
    </div>
}