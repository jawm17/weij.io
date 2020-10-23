import zIndex from '@material-ui/core/styles/zIndex';
import React, { useEffect, useState, useContext } from 'react';

export default function Media(props) {
    const [open, setOpen] = useState(false);
    const [x, setX] = useState(document.getElementById(props.id).getBoundingClientRect().x);
    const [y, setY] = useState(document.getElementById(props.id).getBoundingClientRect().y);
    const [width, setWidth] = useState(196);
    const [height, setHeight] = useState(260);
    const [br, setBr] = useState(12);

    const style = {
        mediaMain: {
            position: "fixed",
            top: y,
            left: x,
            margin: 0,
            width: width,
            height: height,
            backgroundColor: "gray",
            borderRadius: br,
            transition: "all 0.2s ease-in-out",
            zIndex: 2
        }
    }

    useEffect(() => {
        openMedia();
    }, []);


    function openMedia() {
        setTimeout(() => {
            setBr(0);
        }, 100)
        setTimeout(() => {
            setWidth("100vw");
            setHeight("100vh");
            setY(0);
            setX(0);
        }, 200)
    }

    return (
        <div style={style.mediaMain} >
            
        </div>
    );
}