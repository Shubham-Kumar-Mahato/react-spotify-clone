import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid,Slider } from "@mui/material";
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
               <img className = "footer_albumLogo" src="https://resources.tidal.com/images/0d546442/a46e/4f35/86e0/68fcc37baf9f/640x640.jpg" alt="" />
               <div className="footer_songInfo">
                   <h4>Yeah!</h4>
                   <p>Lets bang it!</p>
               </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />

                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Footer
