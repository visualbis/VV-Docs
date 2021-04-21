import React from "react";
import ReactDOM from "react-dom";
import "./css/custom.css";
import "react-medium-image-zoom/dist/styles.css";

export const ReleaseDate = (props) => {
    return (
        <h1 class="docTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocItem-">{props.version}
            <p id="release-date">{props.date}</p>
        </h1>
        
    );
}