import React, {Component} from 'react';
import { Link } from 'react-router';

export default function Campuses (props) {
    return (
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <Link to='/students'>
                        <div className="thumbnail">
                            <img src="scott-webb-12981.jpg" alt="..."/>
                            <div className="caption">
                                <h3>Campus Name</h3>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-sm-6 col-md-4">
                    <Link to='/students'>
                        <div className="thumbnail">
                            <img src="scott-webb-12981.jpg" alt="..."/>
                            <div className="caption">
                                <h3>Campus Name</h3>
                            </div>
                        </div>
                    </Link>
                </div>


                <div className="col-sm-6 col-md-4">
                    <Link to='/students'>
                        <div className="thumbnail">
                            <img src="scott-webb-12981.jpg" alt="..."/>
                            <div className="caption">
                                <h3>Campus Name</h3>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-xs-12 center-div">
                    <Link to='campus/add'>
                        <button type="buttontton" className="btn btn-default btn-info center-div">
                            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Create Campus
                        </button>
                    </Link>
                </div>

            </div>
    );
}


