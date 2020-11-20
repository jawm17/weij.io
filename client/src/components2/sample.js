import React, {useEffect} from 'react';

export default function Sample(props) {

    useEffect(() => {
        console.log(props.src)
    });

    return (
        <div>
             <video id="mediaPlayer" controls controlsList="nodownload" muted>
                <source src={props.src} type="video/mp4" />
                        Your browser does not support the video tag.
            </video>
        </div>
    );
}