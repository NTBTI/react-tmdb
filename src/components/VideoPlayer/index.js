import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import videojsOverlay from '../../util/videojs-overlay.js';
import 'videojs-overlay/dist/videojs-overlay.css';
import { Wrapper, Video } from './VideoPlayer.styles';

export const VideoJS = (props) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const { options, onReady } = props;

    useEffect(() => {
        // forces init only once
        if (!playerRef.current) {
            const videoEl = videoRef.current;
            if (!videoEl) {
                return;
            }

            const player = playerRef.current = videojs(videoEl, options, () => {
                console.log('VideoJS player is ready');
                onReady && onReady(player);
            })
        } else {
            // you can update player here [update player through props]
            // const player = playerRef.current;
            // player.autoplay(options.autoplay);
            // player.src(options.sources);
        }
    }, [options,videoRef]);

    //Destroy when unmounted
    useEffect(() => {
        const player = playerRef.current;

        return() => {
            if (player) {
                player.dispose();
                playerRef.current= null;
            }
        }
    }, [playerRef]);

    return (
        <Wrapper>
            <Video data-vjs-player>
                <video ref={videoRef} className="video-js vjs-big-play-ceneter" />
            </Video>
        </Wrapper>
    );
}

export default VideoJS;