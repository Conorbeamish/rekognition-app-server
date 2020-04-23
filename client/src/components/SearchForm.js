import React, {useState, useContext, useReducer} from 'react';
import axios from "axios";
import {ImageAnalysisContext} from "../contexts/ImageAnalysisContext";
import {IsLoadingContext} from "../contexts/IsLoadingContext";

const SearchForm = () => {
    const { dispatchImage } = useContext(ImageAnalysisContext);
    const { dispatchLoading} = useContext(IsLoadingContext);
    const [data, setData] = useState({
        url: "",
        maxLabels: 10,
        minConfidence: 50
    });
    const [errors, setErrors] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors("")
        dispatchLoading({type: "SET_LOADING_TRUE"});

        axios.post("/api", {...data})
        .then((res) => {
            const resData = res.data
            const {url, maxLabels, minConfidence} = data
            dispatchImage({type: "ADD_IMG_DATA", imageData: {resData, url, maxLabels, minConfidence}})
            dispatchLoading({type: "SET_LOADING_FALSE"})
        })
        .catch((err)=> {
            setErrors(err.response.data.message)
            dispatchLoading({type: "SET_LOADING_FALSE"})
        })
        setData({...data, url:""})
    }

    const handleChange = (e) =>{
        setData({...data, [e.target.name]: e.target.value}) 
    }



    return ( 
        <div className="search">
            <h3>Search for an image</h3>
            <p>To get started simply input the image url below, you may have to right click an image you find online and select "copy image address" to get the proper url.</p>
            <div style={{height: "1rem"}}>{errors}</div>
            <form onSubmit={handleSubmit}>
                <label for="url">Image Address: </label>
                <input type="text" name="url" onChange = {handleChange} value={data.url} placeholder="Enter image url..." autocomplete="off"/>
                <label for="maxLabels">Max Labels:</label>
                <input type="number" name="maxLabels" min="1" max="50" onChange = {handleChange} value={data.maxLabels}/>
                <label for="minConfidence">Min Confidence:</label>
                <input type="number" name="minConfidence" min="1" max="100" onChange = {handleChange} value={data.minConfidence}/>
                <button type="submit">Submit</button> 
            </form>
        </div>
    );
}
 
export default SearchForm;