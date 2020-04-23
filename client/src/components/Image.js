import React, {useContext} from 'react';
import {ImageAnalysisContext} from "../contexts/ImageAnalysisContext";
import {IsLoadingContext} from "../contexts/IsLoadingContext";
import {useSpring, animated} from "react-spring";

const Image = () => {
    const defaultImg =  require("../images/homepage3.jpg")
    const {imageData} = useContext(ImageAnalysisContext);
    const {isLoading} = useContext(IsLoadingContext);
    const imgUrl = imageData.url ? imageData.url : defaultImg;
    const animate = useSpring({
        config:{
            duration: 1000
        },
        marginLeft: 0,
        from: {marginLeft: -1000}
    })

    return isLoading ? (
        <div className="image-loading"><i className="fa fa-3x fa-spinner fa-spin"></i></div>
     ) : (
        <animated.img style={animate} className="image" src={imgUrl}></animated.img> 
    )
}
 
export default Image;