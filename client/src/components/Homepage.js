import React from 'react';
import Info from "./Info";
import Image from "./Image"
import SearchForm from "./SearchForm";
import {useSpring, animated} from "react-spring";

const Homepage = () => {
    const animate = useSpring({
        config:{
            duration: 1000
        },
        marginTop: 0,
        from: {marginTop: 1000}
    })
    return ( 
        <div className="homepage">
            <div className="ls-container">
                <Image />
            </div>
            
            <div className="rs-container">
                <animated.div style={animate}>
                    <SearchForm />
                    <Info/>
                </animated.div>
            </div>
        </div>
     );
}
 
export default Homepage;