import React, { Component } from 'react';

class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            { name: 'all', label: 'All' },
            { name: 'like', label: 'Liked' },
            { name: 'favorite', label: 'Favorites' }
        ]
    }

    render() {
        const buttons = this.buttons.map(({ name, label }) => {
            const {filter, onChangeFilterSelect} = this.props;
            const active = filter === name;
            const btnClass = active ? 'btn btn-info' : 'btn btn-outline-secondary'
            return (
                <button
                    className={btnClass}
                    type="button"
                    key={name}
                    onClick={() => onChangeFilterSelect(name)} 
                >
                    {label}
                </button>
            )
        })
        return (
            <div className='btn-group'>
                {buttons}
            </div>
        );
    }
}

export default PostStatusFilter;

















// import React from 'react';

// const PostStatusFilter = () => {
//     return (
//         <div className = 'btn-group'>
//             <button className="btn btn-info" type="button">All posts</button>
//             <button className="btn btn-outline-secondary" type="button">Liked</button>            
//         </div>
//     )
// }

// export default PostStatusFilter ;           