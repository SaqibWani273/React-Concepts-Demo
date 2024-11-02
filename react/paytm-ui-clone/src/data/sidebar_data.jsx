import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';

// var sidebarItemsList=[
//     new SidebarItem('Home',<HomeIcon/>) ,
//     new SidebarItem('Orders',  <ListAltIcon/>),
//     new SidebarItem('Home',<HomeIcon/>) ,
//     new SidebarItem('Orders',  <ListAltIcon/>),
//     new SidebarItem('Home',<HomeIcon/>) ,
//     new SidebarItem('Orders',  <ListAltIcon/>),
//     new SidebarItem('Home',<HomeIcon/>) ,
//     new SidebarItem('Orders',  <ListAltIcon/>),
//     new SidebarItem('Home',<HomeIcon/>) ,
//     new SidebarItem('Orders',  <ListAltIcon/>),
//     new SidebarItem('Home',<HomeIcon/>) ,
//     new SidebarItem('Orders',  <ListAltIcon/>),
//     new SidebarItem('Home',<HomeIcon/>) ,
//     new SidebarItem('Orders',  <ListAltIcon/>),
//     new SidebarItem('Home',<HomeIcon/>) ,
//     new SidebarItem('Orders',  <ListAltIcon/>),
//     new SidebarItem('Home',<HomeIcon/>) ,
//     new SidebarItem('Orders',  <ListAltIcon/>),
// ]
var sidebarItemsList2=[
    {
        title:'Home',
        icon:<HomeIcon />,
    },
    {
        title:'Orders',
        icon:<ListAltIcon/>,
    },
    {
        title:'Home',
        icon:<HomeIcon/>,
    },
    {
        title:'Orders',
        icon:<ListAltIcon/>,
    },
    {
        title:'Home',
        icon:<HomeIcon/>,
    },
    {
        title:'Orders',
        icon:<ListAltIcon/>,
    },
    {
        title:'Home',
        icon:<HomeIcon/>,
    },
    {
        title:'Orders',
        icon:<ListAltIcon/>,
    },
];
export default sidebarItemsList2
class SidebarItem{
    constructor(title,icon){
        this.title=title
        this.icon=icon
    }
}               
    