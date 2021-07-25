import React, { Component } from 'react';
import './Post-list-item.scss'


export default class PostListItem extends Component {

    render() {
        const {header, contant, onDelete, onToggleLiked, onTogglefavorite, favorite, like} = this.props        
       
        return (
            <div className='app-list__item'>
                <h3>{header}</h3>
                <span className="app-list__item-contant">{contant}</span>
                <div className='app-list__item-actions'>
                    <button
                        className={favorite ? 'btn btn-warning' : 'btn btn-secondary'}
                        type="button"
                        onClick={onTogglefavorite}>
                        <i className="bi bi-star"></i>
                    </button>
                    <button
                        className='btn btn-secondary'
                        type="button"
                        onClick={onDelete}>
                        <i className="bi bi-trash"></i>
                    </button>
                    <button
                        className={like ? 'btn btn-danger' : 'btn btn-secondary'}
                        type="button"
                        onClick={onToggleLiked}>
                        <i className='bi bi-heart'></i>
                    </button>
                </div>
            </div>
        )
    }
}

