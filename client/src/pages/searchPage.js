import React from "react";
import SearchPanel from "../components/searchPanel/SearchPanel";
import Nav from "../components/Nav";

export default function SearchPage() {

    return (
        <div>
            <div className="background"/>
            <Nav page={"search"} />
            <div className="feedPage">
                <SearchPanel />
            </div>
        </div>
    );
}