import React from 'react';
import {useSpring, animated} from "react-spring";

const ImageAnalysis = ({label}) => {
    const animate = useSpring({
        config:{
            duration: 1000
        },
        marginTop: 0,
        from: {marginTop: -1000}
    })
    
    //Take confidence to 2 decimal places
    const confidence = (Math.round(label.Confidence* 100) / 100).toFixed(0);
    const width = `${confidence}%`

    return ( 
        <div style={animate} className="label">
            <div className="label-details">{label.Name} : {width}</div>
            <div className="progress-bar-container" >
                <div className="progress-bar" style={{width}}></div>
            </div>
        </div>
     );
}
 
export default ImageAnalysis;