import React from "react";
import { Spring } from "react-spring/renderprops";

export default function Comments() {

    const commentsStyle = {
        backgroundColor: "blue"
    }

    return (
        <Spring>
            {props => (
                <div style={props}>
                    <div style={commentsStyle}>
                        <p>Comments</p>
                    </div>
                </div>
            )}
        </Spring>
    );
}