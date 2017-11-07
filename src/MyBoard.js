import React from 'react';
import { connect } from "redux-zero/react";
import {NavLink} from 'react-router-dom';
import './App.css';

const MyBoard =()=>{
  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 col-md-12 main-header">
          <div className="col-lg-2 col-md-2 cont-icon">
              <span><i className="fa fa-columns fa-2x" aria-hidden="true"></i></span>
              <span className="board">Boards</span>
          </div>
          <div className="col-offset-2 col-lg-8 col-md-8 text-center logo">
              <img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d"/>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 cont-icon">
              <span><i class="fa fa-user-o fa-x2" aria-hidden="true"></i></span>
              <NavLink to="board"><span className="board">My Boards</span></NavLink>
          </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <span className="add">Agregar lista</span>
        </div>
      </div>
    </div>
  )
}
export default MyBoard;