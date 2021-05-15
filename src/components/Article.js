import React from "react";

function Article({
    title,
    preview,
    timeToRead,
    date="January 1, 1970"
}) {
    
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{timeToRead}</p>
        </article>
    );
}

export default Article;