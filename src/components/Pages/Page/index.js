import React from "react";

export default function Page(props) {
    const { title, subtitle, content } = props;

    return (
        <div id="page">
            <div id="page_titles">
                {title && <p id="page_title">{title}</p>}
                {subtitle && <p id="page_subtitle">{subtitle}</p>}
            </div>
            <div id="page_content">
                {content}
            </div>
        </div>
    );
}