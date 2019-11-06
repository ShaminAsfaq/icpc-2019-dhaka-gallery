import React from 'react';

const ImageCard = (props) => {

    const src = props.src.replace(/#/g, '');
    var name = props.name;
    var role = props.role;

    return (
        <div className="ui card" style={{cursor: 'pointer'}}>
            <div className="image">
                <img src={src} alt="src"/>
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
