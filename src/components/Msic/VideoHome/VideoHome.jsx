import React, { useState } from 'react'
import './VideoHome.css'
import Play_Btn from '../../../assets/images/icons/play_btn.svg'
import Close_Btn from '../../../assets/images/icons/close.png'


const VideoHome = () => {
    const [src, setSrc] = useState('#');

    const openPopUp = () => {
        setSrc('https://www.youtube.com/embed/jSjwfLDU1Jg?si=dzj3N59W_s6xGYuL');
        document.querySelector('.popUp').style.display = 'block';
        const timer = setTimeout(() => {
            document.querySelector('.iframeVdo').style.display = 'block';
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    };

    const closePopUp = () => {
        setSrc('#');
        document.querySelector('.iframeVdo').style.display = 'none';
        document.querySelector('.popUp').style.display = 'none';
    };

    return (
        <React.Fragment>
            <div className="videohome-container">
                <div className="videohome-inner">
                    <img src={Play_Btn} className='img-fluid' alt="subarto roy video playback" onClick={openPopUp} />
                    <div className="popUp">
                        <img src={Close_Btn} className='close_btn' onClick={closePopUp} alt="" />
                        <iframe className='iframeVdo' width="560" height="315" src={src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default VideoHome