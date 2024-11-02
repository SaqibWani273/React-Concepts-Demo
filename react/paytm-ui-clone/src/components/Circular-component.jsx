export default function CircularComponent({height,width,component}) {
    return (
        <div className={`flex space-x-5 bg-gray-300 h-${height} w-${width} rounded-full items-center justify-center`}>
            {component}
            </div>
    );
}