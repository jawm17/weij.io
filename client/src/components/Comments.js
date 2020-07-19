import React from "react";
import { Spring } from "react-spring/renderprops";

export default function Comments() {

    const style = {
        commentsStyle: {
            backgroundColor: "white",
            width: "95vw",
            maxWidth: 535,
            height: 140,
            position: "relative",
            right: 526,
            marginTop: 65
        }
    }

    return (
        <Spring
            from={{ opacity: -5 }}
            to={{ opacity: 1 }}
        >
            {props => (
                <div style={props}>
                    <div style={style.commentsStyle}>
                        Comments
                    </div>
                </div>
            )}
        </Spring>
    );
}