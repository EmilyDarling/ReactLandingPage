import React from "react";
import { ProgressPlugin } from "webpack";



//create your first component
const Nav = () => {
	return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container-fluid">
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand text-white" href="#">cat</a>
                </div>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarTogglerDemo01">
               
                <ul className="navbar-nav ">
                    <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-secondary" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-secondary" href="#" tabIndex="-1" aria-disabled="true">Service</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-secondary" href="#" tabIndex="-1" aria-disabled="true">Contact</a>
                    </li>
                </ul>
            
            </div>
        </div>
        </nav>
	);
};


export default Nav;