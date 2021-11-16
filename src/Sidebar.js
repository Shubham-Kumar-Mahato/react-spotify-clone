import React from 'react';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SidebarOption from './SidebarOption';
import { useDataLayerValue } from './DataLayer';
const Sidebar = () => {
    const [{playlists},dispatch] = useDataLayerValue();
    return (
        <div className = "sidebar">
           <img className="sidebar_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRWOPdB_ZBJWFcA8htNL-MpC0vnLTgGcKoA&usqp=CAU" alt="" />


           <SidebarOption Icon={HomeIcon} title="Home" />
           <SidebarOption Icon={SearchIcon} title="Search" />
           <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
           <br />
           <strong className="sidebar_title">PLAYLISTS</strong>
           <hr />
           {playlists?.items?.map(playlists=>(
               <SidebarOption  title={playlists.name} />

           ))}
        
        </div>
    )
}

export default Sidebar;
