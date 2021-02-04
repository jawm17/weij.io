import React from "react";
import Header from '../../components/components3/Header';
import "./styles/userPageStyle.css";

export default function UserPage() {

    return (
        <div>
            <Header page="profile"/>
            <div id="outerProfileBody">
                <div id="profileBody">
                    <div id="profileInfo">
                        <div>
                            <img id="profileImage" src="https://lh3.googleusercontent.com/ogw/ADGmqu9lR4YTUnjkgrgeuoE-JBqu8RHR4wzA8Xum5zfqWw=s64-c-mo"></img>
                        </div>
                        <div id="profileUsername">
                            Jawm42
                            <div id="profileNumbers">
                                <div>
                                    200 followers
                                </div>
                                <div>
                                    20 posts
                                </div>
                            </div>
                            <div id="profileButtons">
                                <button>
                                    settings
                                </button>
                                <button>
                                        create post
                                </button>
                                <button>
                                    share
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="line">

                    </div>
                </div>
            </div>
        </div>
    );

}