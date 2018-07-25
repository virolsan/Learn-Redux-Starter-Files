import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
    render() {
        const { postId } = this.props.params;
        const i = this.props.posts.findIndex((post) => post.code === postId);

        return (
            <div className="single-photo">
                <Photo index={i} post={this.props.posts[i]} {...this.props} />
                <Comments postComments={this.props.comments[postId] || []} {...this.props} />
            </div>
        )
    }
}

export default Single;