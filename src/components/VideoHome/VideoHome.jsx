import React, { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = () => {
    const videoId = '2u2eigSq4_I';

    const playerOptions = {
        height: '780',
        width: '100%',
        playerVars: {
        autoplay: 1,
        controls:0,
        },
    };

    const playerRef = useRef(null);

    useEffect(() => {
        if (playerRef.current) {
        playerRef.current.internalPlayer.playVideo();
        }
    }, []);

    const handleVideoEnd = () => {
        if (playerRef.current) {
            playerRef.current.internalPlayer.playVideo();
            }
        };

    return <YouTube videoId={videoId} opts={playerOptions} onEnd={handleVideoEnd} ref={playerRef} />;
};

export default VideoPlayer;

