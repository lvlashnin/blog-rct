import React, { Component } from 'react';
import './Post-add-form.scss'

export default class PostAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: '',
            content: ''
        }
    }

    onHeaderInputChange = (e) => {
        this.setState({
            header: e.target.value
        });
    }
    onContentInputChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.header && this.state.content) {
            this.props.onAdd(this.state.header, this.state.content);
            this.setState({
                header: '',
                content: ''
            });
        }
    }

    render() {
        const { modalActivity, onChangeModalActivity } = this.props;
      
        return (
            <div className={modalActivity ? 'post-modal post-modal--active' : 'post-modal'}>
                <div className="post-modal__container">
                    <form
                        action="#"
                        onSubmit={this.onSubmit}                        
                    >
                        <input
                            className="form-control form-control-header"
                            type="text"
                            placeholder="The title of your post"
                            onChange={this.onHeaderInputChange}
                            value={this.state.header}
                        />
                        <textarea
                            type="text"
                            placeholder="Your post"
                            className="form-control form-control-content"
                            onChange={this.onContentInputChange}
                            value={this.state.content}
                        />
                        <div className="post-modal__actions">
                            <button
                                type="submit"
                                className="btn btn-outline-secondary"
                                onClick={onChangeModalActivity}
                            >Add Post</button>

                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={onChangeModalActivity}
                            >Close</button>
                        </div>

                    </form>

                </div>

            </div>



        );
    }
}

