import React from "react";




//create your first component
const Nav = () => {
	return (
        
            
             
                <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#">Start Bootstap</a>
                        <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarTogglerDemo01">
                            
                            <ul className="nav navbar-nav ">
                                <li className="nav-item ">
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
                        <div className="d-flex justify-content-end">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            
                        </div>
                    </div> 
                </nav>
        
        
                
            
	);
};


export default Nav;