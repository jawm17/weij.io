import React from "react";
import SearchPanel from "../components/searchPanel/SearchPanel";
import Nav from "../components/Nav";
import Background from "../components/Background";

export default function SearchPage() {

    return (
        <div>
            <Background/>
            <Nav page={"search"} />
            <div className="feedPage">
                <SearchPanel />
            </div>
        </div>
    );
}