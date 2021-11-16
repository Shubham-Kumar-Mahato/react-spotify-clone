import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavouriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from './SongRow';
const Body = ({spotify}) => {
    const [{discover_weekly},dispatch] = useDataLayerValue();
    return (
        <div className = "body">
          <Header spotify={spotify} />

          <div className="body_info">
              <img src={discover_weekly?.images[0].url} alt="RQ" />
              <div className="body_infoText">
                  <strong>PLAYLIST</strong>
                  <h2>Discover Weekly</h2>
                  <p>{discover_weekly?.description}</p>
              </div>
          </div>
          <div className="body_songs">
              <div className="body_icons">
                  <PlayCircleFilledIcon  className="body_shuffle" />
                  <FavouriteIcon fontSize="large" />
                   <MoreHorizIcon />
              </div>

              {discover_weekly?.tracks.items.map(item =>(
                   <SongRow track={item.track} />
    ))}
              {/* list of song */}
          </div>
        </div>
    )
}

export default Body;
