import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const ImageCard = (props) => {
    const src = props.src.replace(/#/g, '');
    var name = props.name;
    var role = props.role;

    return (
        <div className="ui card" style={{cursor: 'pointer'}}>
            <div className="ui image" style={{display:'flex', justifyContent: 'center'}}>
                <LazyLoadImage
                    src={src}
                    effect="blur"
                />
            </div>
            <div className="content">
                <a className="header">{name}</a>

                <div className="meta">
                <span className="date">{role}</span>
                </div>
            </div>
        </div>
    );
}

export {
    ImageCard as default
}
