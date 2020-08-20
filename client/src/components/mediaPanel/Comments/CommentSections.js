import React, { useEffect, useState, useContext } from 'react';
import { Spring } from "react-spring/renderprops";
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
        comments: {
            backgroundColor: "white",
            width: "95vw",
            maxWidth: 540,
            height: 300,
            overflowY: "scroll",
        }
    };

    function getComments() {
        MediaContentService.getComments(props.src).then(data => {
           setComments(data.comments.reverse());
        })
    }

    return (
        <Spring
            from={{ opacity: -5 }}
            to={{ opacity: 1 }}
        >
            {props => (
                <div style={props}>
                    <div>
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