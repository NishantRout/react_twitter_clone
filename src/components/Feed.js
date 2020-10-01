import React from 'react';
import './css/Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';

function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <Post
                displayName="Perfect Shades"
                username="perfectshades.99"
                verified
                text="In this video of HTML5 tutorial, we'll talk about the image tag, it’s attributes and how to use an image as a link.
                Stay tuned for more awesome videos!

                🔗 https://youtu.be/UZoxdf-v0dA

                #html #HTML5 #frontend #FrontEndDevelopment #webdev #webdesign #webdevelopment #tutorial #youtube"
                image="https://pbs.twimg.com/media/EgFpk2DUwAAQJR7.jpg"
                avatar="https://pbs.twimg.com/profile_images/1243512060564189185/SMFgwobl.png"
            />
            {/* <Post />
            <Post />
            <Post /> */}
        </div>
    )
}

export default Feed;
