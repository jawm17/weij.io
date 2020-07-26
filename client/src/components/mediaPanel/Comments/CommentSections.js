import React, { useEffect, useState, useContext } from 'react';
import { Spring } from "react-spring/renderprops";
import UserService from "../../../services/UserService";
import MediaContentService from '../../../services/MediaContentService';
import PostComment from './PostComment';
import Comment from "./Comment";

export default function CommentSection(props) {
    const [comments, setComments] = useState([]);
    const [src, setSrc] = useState(props.src);

    useEffect(() => {
        getComments();
        setSrc(props.src);
    }, []);

    const style = {
        commentsStyle: {
            backgroundColor: "white",
            width: "95vw",
            maxWidth: 540,
            height: 338,
            
        },
        comments: {
            backgroundColor: "white",
            width: "95vw",
            maxWidth: 540,
            height: 310,
            overflowY: "scroll",
        }
    };

    function getComments() {
        MediaContentService.getComments(props.src).then(data => {
           setComments(data.comments);
        })
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
                            {comments.map((comment) => {
                                return <Comment comment={comment.body} user={comment.user} key={comment.date} />
                            })}
                        </div>
                        <PostComment src={src} refresh={() => getComments()}/>
                    </div>
                </div>
            )}
        </Spring>
    );
}