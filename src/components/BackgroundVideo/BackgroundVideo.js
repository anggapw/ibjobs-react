import React from 'react';

import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const videoSource = "https://assets.mixkit.co/videos/preview/mixkit-motion-graphic-animation-of-futuristic-devices-99786-large.mp4"
    return (
        <div className={classes.Container}>
            <video autoPlay="autoplay" loop="loop" width="100%" muted>
                <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>


    )
}

export default BackgroundVideo;