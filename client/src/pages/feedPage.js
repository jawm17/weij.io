import React, { Component } from "react";
import MediaPanel from "../components/mediaPanel";
import LeftPanel from "../components/leftPanel";
import './feedPageStyle.css'

class Feed extends Component {

    render() {
        return (
            <div className="feedPage">
                <div className="feedDiv">
                    <div className="leftPanel">
                        <LeftPanel />
                    </div>

                    <div className="mediaPanel">
                        <MediaPanel />
                    </div>
                </div>
            </div>
        )
    }
}

export default Feed;