import React from 'react';
import Photo from './Photo';

const PhotoGrid = (props) => (
    <div className="photo-grid">
        {props.posts.map((post, i) => <Photo key={i} index={i} post={post} {...props} />)}
    </div>
);

export default PhotoGrid;