import React, {lazy, Suspense} from 'react';
import { ImagePlaceholder } from './placeholders/ImagePlaceholder';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const LazyLoadImageWrapper = lazy(() => import('./wrappers/LazyLoadImageWrapper'))
const ImageCard = (props) => {
    const src = props.src.replace(/#/g, '');
    var name = props.name;
    var role = props.role;

    return (
        <div className="ui card" style={{cursor: 'pointer'}}>
            <div className="ui image" style={{ display: 'flex', justifyContent: 'center' }}>
                <Suspense fallback={<ImagePlaceholder />}>
                    <LazyLoadImageWrapper 
                        src={src}
                        effect="blur"
                    />
                </Suspense>
            </div>
            <div className="content" style={{fontSize: '0.8em'}}>
                <a className="header name-header">{name}</a>

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
