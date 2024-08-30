import React from "react";
import Card from "./card.jsx";



//create your first component
const Middle = () => {
	return (
        <div className= "d-flex flex-column align-items-center">
        <div className="jumbotron jumbotron-fluid">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"/>
            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
        <div class="row row-cols-1 row-cols-md-4 row-cols-sm-1 g-3">
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