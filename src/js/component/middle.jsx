import React from "react";
import Card from "./card.jsx";



//create your first component
const Middle = () => {
	return (
        <div className= "d-flex flex-column align-items-center">
        <div className="jumbotron jumbotron-fluid bg-light w-75">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolore? Facere aliquid, iure voluptas aspernatur et voluptate fugit obcaecati ducimus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolore? Facere aliquid, iure voluptas aspernatur et voluptate fugit obcaecati ducimus!
            </p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </p>
        </div>
        <div class="row w-75 row-cols-lg-4 row-cols-md-1 g-3">
            <div class="col">
                <Card/>
            </div>
            <div class="col">
                <Card/>
            </div>
            <div class="col">
                <Card/>     
            </div>
            <div class="col">
                <Card/>
            </div>
        </div>
        
    </div>
     );
};


export default Middle;