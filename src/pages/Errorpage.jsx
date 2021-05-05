import React from 'react'
import { Link } from 'react-router-dom';
import Error from "../Assets/Error.jpg"
const Errorpage = () => {
    return (
        <div>
            <div className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="contant_box_404">
                                    <Link className="link_404" to="/">
                                        <h2>Go Home</h2>
                                        </Link>
                                </div>
                                <img src={Error} width="100%" alt=""/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Errorpage;