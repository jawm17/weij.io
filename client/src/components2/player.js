import React, { useEffect, useState } from 'react';

export default function Player(props) {

    const style = {
        video: {
            width: "100vw",
            height: 400,
            backgroundColor: "black"
        }
    }


    return (
        <div>
            <video style={style.video} controls>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                </video>
        </div>
    );
}