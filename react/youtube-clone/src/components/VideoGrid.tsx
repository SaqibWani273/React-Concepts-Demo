import { VideoCard } from "./VideoCard";

const videos=[
    {
        image:"./image.png",
        title:"Someting in replacement of title",
        subtitle:"Subtitle text",
        views:"40m views",
        time:"1 day ago",
        key:"1"
    },
    {
        image:"./image.png",
        title:"Some random title",
        subtitle:"Subtitle text",
        views:"40m views",
        time:"1 day ago",
        key:"2"
    },
    {
        image:"./image.png",
        title:"lorem ipsum title",
        subtitle:"Subtitle text",
        views:"40m views",
        time:"1 day ago",
        key:"3"
    },
    {
        image:"./image.png",
        title:"lorem ipsum title lorem ipsum title",
        subtitle:"Subtitle text",
        views:"40m views",
        time:"1 day ago",
        key:"4"
    },
    {
        image:"./image.png",
        title:"lorem ipsum title lorem ipsum title",
        subtitle:"Subtitle text",
        views:"40m views",
        time:"1 day ago",
        key:"5"
    },

];

export function VideoGrid(){
    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            videos.map((video)=><VideoCard key={video.key} image={video.image} title={video.title} subtitle={video.subtitle} views={video.views} date={video.time}/>)
        }
    </div>
}