import React from 'react';
import './App-header.scss';

const AppHeader = ({ numberOfAllPosts, numberOfLikedPosts, onChangeModalActivity }) => {
    let statusBarString = '';
    if (numberOfAllPosts) {
        if (numberOfAllPosts === 1) {
            statusBarString = 'There is 1 post';
        } else {
            statusBarString = `There are ${numberOfAllPosts} posts, ${numberOfLikedPosts} liked.`;
        }
    } else {
        statusBarString = 'There is no posts'
    }

    return (
        <div className="app-header">

            <div className="main-nav">

                <div className='app-header__logo'>SIMPLE BLOG</div>
                <span class="badge bg-info text-dark">{statusBarString}</span>
                <button className='btn btn-outline-secondary' onClick={onChangeModalActivity}>NEW POST</button>

            </div>

        </div>
    )
}

export default AppHeader;





