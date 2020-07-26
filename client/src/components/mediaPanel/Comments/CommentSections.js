import React, { useEffect, useState, useContext } from 'react';
import "./PostComment";
import { Spring } from "react-spring/renderprops";
import UserService from "../../../services/UserService";
import MediaContentService from '../../../services/MediaContentService';
import PostComment from './PostComment';

export default function CommentSection(props) {

    const style = {
        commentsStyle: {
            backgroundColor: "white",
            width: "95vw",
            maxWidth: 540,
            height: 338,
        },
        comments: {
    
            width: "95vw",
            maxWidth: 540,
            height: 310,
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
                        <div className="comments" style={style.comments}>

                        </div>
                        <PostComment/>
                    </div>
                </div>
            )}
        </Spring>
    );
}