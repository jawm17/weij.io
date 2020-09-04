import React, { useEffect, useState } from 'react';
import MediaContentService from '../../../services/MediaContentService';

export default function PostComment(props) {
    const [newComment, setNewComment] = useState("");

    const style = {
        post: {
            width: "95vw",
            maxWidth: 540,
            display: "flex",
            justifyContent: "center",
            marginTop: 5
        },
        input: {
            marginRight: 10,
            width: "70vw",
            maxWidth: 450,
        }
    }

    function postComment() {
        if (newComment && newComment.length < 120) {
            MediaContentService.postComment(newComment, props.src).then(data => {
                props.refresh();
            })
        }
    }

    function eventHandler(e) {
        if (e.target.value.length < 120) {
            setNewComment(e.target.value);
        }
    }

    return (
        <div style={style.post}>
            <input style={style.input} onChange={eventHandler} placeholder="say something"></input>
            <button onClick={() => postComment()}>POST</button>
        </div>
    );
}