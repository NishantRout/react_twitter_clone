import { Avatar } from '@material-ui/core';
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@material-ui/icons';
import React from 'react';
import './css/Post.css';
import Hashtags from 'react-highlight-hashtags';

function Post({ displayName, username, verified, text, image, avatar }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar
                    src="https://pbs.twimg.com/profile_images/1243512060564189185/SMFgwobl.png"
                />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Perfect Shades <span
                                className="post__headerSpecial"
                            >
                                <VerifiedUser className="post__badge" />
                                @nishant_rout
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <Hashtags>
                            In this video of HTML5 tutorial, we'll talk about the image tag, it’s attributes and how to use an image as a link.
                            Stay tuned for more awesome videos!

                            🔗 https://youtu.be/UZoxdf-v0dA

                            #html #HTML5 #frontend #FrontEndDevelopment #webdev #webdesign #webdevelopment #tutorial #youtube
                        </Hashtags>
                    </div>
                </div>
                <img
                    src="https://pbs.twimg.com/media/EgFpk2DUwAAQJR7.jpg"
                    alt=""
                />
                <div className="post__footer">
                    <ChatBubbleOutline fontSize="small" />
                    <Repeat fontSize="small" />
                    <FavoriteBorder fontSize="small" />
                    <Publish fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post;
