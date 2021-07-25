import React from 'react';  
import './Post-list.scss'

import PostListItem from '../Post-list-item/Post-list-item.jsx'

const PostList = ({posts, onDelete, onTogglefavorite, onToggleLiked}) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
           <li className='list-group__item' key={id}>
               <PostListItem {...itemProps}
               onDelete={() => onDelete(id)}
               onTogglefavorite={() => onTogglefavorite(id) }
               onToggleLiked={() => onToggleLiked(id)}/>
           </li> 
        )
    })
    return (
       <ul className='list-group'>
           {elements}
       </ul>
    )
}

export default PostList;