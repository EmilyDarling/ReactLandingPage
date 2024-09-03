import React from "react";
import cardImg from "../../img/card_img.png";



//create your first component
const Card = () => {
	return (
        <div className="card mx-2 w-100" >
            <img src={cardImg} className="card-img-top" alt="..."/>
            <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
    )
};


export default Card;