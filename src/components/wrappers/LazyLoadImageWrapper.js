import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';

const LazyLoadImageWrapper = (props) => {
    return (
        <LazyLoadImage src={props.src} effect={props.effect}/>
    );
}


export {
    LazyLoadImageWrapper as default
}
