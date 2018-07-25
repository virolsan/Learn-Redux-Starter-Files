import React from 'react';

const Comment = ({ comment, postId, index, removeComment }) => {
    return (
        <div className="comment">
            <p>
                <strong>{comment.user}</strong>
                {comment.text}
                <button className="remove-comment" onClick={removeComment.bind(null, postId, index)}>&times;</button>
            </p>
        </div>
    )
}

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }

    render() {
        const { postComments } = this.props;

        return (
            <div className="comments">
                {postComments.map((comment, i) =>
                    <Comment key={i} comment={comment} postId={this.props.params.postId} index={i} removeComment={this.props.removeComment} />)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }

}

export default Comments;