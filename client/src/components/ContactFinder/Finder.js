import React, { useEffect, useState } from 'react';

export default function Finder(props) {
    const [fontSize, setFontSize] = useState(10);
    const [color, setColor] = useState("#ADADAD");
    const [margin, setMargin] = useState("0px");

    const style = {
        letter: {
            fontSize: 10,
            color: color,
        }
    }

    useEffect(() => {
        
    });

    function onLetter() {
        setFontSize(15);
        setColor("black");
        setMargin("0px");
    }

    function offLetter() {
        setFontSize(10);
        setColor("#ADADAD");
        setMargin("200px");
    }

    return (
        <div>
            <div className={props.id} style={style.letter} onMouseEnter={() => onLetter()} onMouseLeave={() => offLetter()}>
                {props.letter}
            </div>
        </div>
    );
}
