import React from 'react';
import "./Map.css";
import map from './map.png';

function Map(props) {
    
    return (
        <div className={`map ${props.className}`} style={props.style}>
            <img className="map_image" src={map} alt="Google Map"/>
        </div>
    )
}

export default Map;
