import React from "react";



//create your first component
const Footer = (props) => {
	return (
        <div className="bg-dark container-fluid position-static bottom-0 text-center mt-5 pt-3" style={{height: 100}}>
            <h3 className="text-white">{props.text}</h3>
        </div>
    )
    
};


export default Footer;