import React from "react";
import Article from "./Article";

function ArticleList({
    posts
}) {
    const postList = posts.map( (post) => {
        const minutes = post.minutes;
        let msg = '';
        if (minutes<30) {
            const num = Math.ceil(minutes/5);
            let emo = '';
            for (let i=0;i<num;i++) emo += '☕️';
            msg = `${emo} ${minutes} min read`;
        } else {
            const num = Math.ceil(minutes/10);
            let emo = '';
            for (let i=0;i<num;i++) emo += '🍱';
            msg = `${emo} ${minutes} min read`;
        };
        return (
            <Article key={post.id} 
                title={post.title} 
                preview={post.preview} 
                date={post.date} 
                timeToRead={msg} 
            />
        );
    })

    return (
        <main>
            {postList}
        </main>
    );
}

export default ArticleList;