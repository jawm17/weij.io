import React, { useEffect, useState } from 'react';

export default function Finder(props) {
    const [color, setColor] = useState("#ADADAD");

    const style = {
        letter: {
            fontSize: 10,
            color: color,
        }
    }

    useEffect(() => {
        
    });

    function onLetter() {
        setColor("black");
    }

    function offLetter() {
        setColor("#ADADAD");
    }

    return (
        <div>
            <div className={props.id} style={style.letter} onMouseEnter={() => onLetter()} onMouseLeave={() => offLetter()}>
                {props.letter}
            </div>
        </div>
    );
}
