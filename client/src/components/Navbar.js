import React from 'react';
import Particles from "react-particles-js";
import {useSpring, animated} from "react-spring";

const Navbar = () => {
    const animate = useSpring({
        config:{
            delay: 500,
            duration: 1500
        },
        opacity: 1,
        from: {opacity: 0}

    })
    return ( 
        <div className="nav">
            <Particles 
                className="particles"
                params={{
                    particles:{
                        number: {
                            value: 50, 
                            density: {
                              enable: true,
                              value_area: 300
                            }
                        }
                    },
            		interactivity:{
                        detect_on:"canvas",
                        events:{
                          onhover:{
                            enable:true,
                            mode: "repulse"
                          }
                        },
                    }
            	}}
            />
            <animated.div style={animate} className="nav-container">
                <h1>Image Analyser</h1>
                <div className="nav-text">
                    Use machine learning to identify features in your images
                </div>
            </animated.div>
        </div>
    );
}
 
export default Navbar;