import { Avatar } from '@material-ui/core';
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@material-ui/icons';
import React from 'react';
import './css/Post.css';

function Post() {
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
                        <p>The next video of HTML5 tutorial series is here. Make sure to subscribe to our channel!!</p>
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
