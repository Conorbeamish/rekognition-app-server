import React, {useContext} from 'react';
import ImageAnalysis from "./ImageAnalysis";
import {ImageAnalysisContext} from "../contexts/ImageAnalysisContext";
import { v4 as uuidv4 } from 'uuid';

const Info = () => {
    const {imageData} = useContext(ImageAnalysisContext);
    const {resData, maxLabels, minConfidence} = imageData;
    return imageData.url? (
        <div className="info">
            <h3>Analysis</h3>
            <div className="info-params">Max Labels: {maxLabels} <span style={{color:"#37667e", fontWeight: "bold"}}> | </span>Min confidence: {minConfidence}% </div>
            <div>
                {resData.Labels.map(label => {
                    return(<ImageAnalysis label={label} key={uuidv4()} />)
                })}
            </div>
        </div>
    ) : (
       <div className="info">
           <h3>Analysis</h3>
           <p>This application is built using AWS Rekognition, which uses machine learning to identify labels in images</p>
           <p>The results are given with a percentage of confidence</p>
       </div>
    )
}
 
export default Info;