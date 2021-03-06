import React from 'react';
import { connect } from "redux-zero/react";
import {NavLink} from 'react-router-dom';

const SingUp =()=>{
    return(
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className=" col-md-offset-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 img-logo">
                <img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d"/>
                </div>
                    <div className=" col-md-offset-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control input-sing" placeholder="First Name"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control input-sing" placeholder="Last Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control input-sing" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control input-sing" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control input-sing"  placeholder="Confirm Password"/>
                            </div>
                            <NavLink to="/myboard" type="submit" className="btn input-sing btn-sing">Sing Up</NavLink>
                        </form>
                    </div>
                <div className=" col-md-offset-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <NavLink to="/singin" type="submit" className="btn input-sing btn-singIn">Sing In</NavLink>
                </div>
                </div>
            </div>        
        </div>
    )
}

export default SingUp;