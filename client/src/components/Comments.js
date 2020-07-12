import React from "react";
import { Spring } from "react-spring/renderprops";
import zIndex from "@material-ui/core/styles/zIndex";

export default function Comments() {

    const commentsStyle = {
        backgroundColor: "white",
        width: "95vw",
        maxWidth: 540,
        height: 40,
        display: "block"
    }

    return (
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
        >
            {props => (
                <div style={props}>
                    <div style={commentsStyle}>
                        Comments
                    </div>
                </div>
            )}
        </Spring>
    );
}