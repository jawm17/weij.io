import React, { useEffect, useState, useContext } from 'react';
import UserService from "../../../services/UserService";
import MediaContentService from '../../../services/MediaContentService';

export default function PostComment() {

    const style = {
        post: {
            width: "95vw",
            maxWidth: 540,
            display: "flex",
            justifyContent: "center"
        },
        input: {
            width: 200,
            marginRight: 10
        }
    }

    return (
                <div style={style.post}>
                    <input style={style.input} placeholder="say something"></input><button>POST</button>
                </div>
    );
}