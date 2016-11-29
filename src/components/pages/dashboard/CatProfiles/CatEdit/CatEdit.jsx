import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import $ from 'jquery';

var CatEdit = React.createClass({
    getInitialState: function(){
        
        return {
            name: '',
            animalTypeID: '',
            breed: '',
            gender: '',
            dateOfBirth: '',
            weight: '',
            height: '',
            length: '',
            declawed: true,
            outdoor: false,
            fixed: true,
            extra: false
        };

    },
    componentWillMount: function() {
        
    },

    componentDidMount: function() {
        
    },

    componentWillUnmount: function(){
        $(window).unbind('resize',this.adjustResize);
    },

    func: function(){

    },


    render: function() {
        return (
            <div className="" key=""> 
                <Link to="/dashboard/CatEdit" className="pull-right btn btn-primary btn-outline btn-rounded">Bla</Link> 
                
                <h2>Edit Cat</h2> 
                <Jumbotron className="col-lg-20">              
                    <div className="row">
                        <div className="col-lg-20">
                            <form className="form-horizontal" role="form">
                                <fieldset>
                                    <legend>Edit Cat</legend>

                                    <div className="form-group">
                                        <label className="col-sm-2 control-label">Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" placeholder="Name of Cat" className="form-control input-underline1"/>
                                        </div>
                                    </div>

                                     <div className="form-group">
                                        <label className="col-sm-2 control-label">Breed</label>
                                        <div className="col-sm-4">
                                            <div className="col-xs-4 col-md-8 text-center">
                                                <div className="dropdown">
                                                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        -- Select From List --
                                                        <span className="caret"></span>
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                        <li><a href="#">1</a></li>
                                                        <li><a href="#">2</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label className="col-sm-2 control-label">Gender</label>
                                        <div className="col-sm-10">
                                            <div className="btn-group" data-toggle="buttons">
                                                <label className="btn btn-primary">
                                                    <input type="radio" name="options" id="option2" /> Male
                                                </label>
                                                <label className="btn btn-primary">
                                                    <input type="radio" name="options" id="option3" /> Female
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-12-2 control-label"> Date of Birth</label>
                                        <div className="col-sm-20">
                                            <input type="text" placeholder="1990-02-10" className="form-control input-underline1"/>
                                        </div>
                                    </div>

                                    
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label">Weight</label>
                                        <div className="col-sm-4">
                                            <input type="text" placeholder="  " className="form-control input-underline1 "/>
                                        </div>

                                        <label className="col-sm-2 control-label">Height</label>
                                        <div className="col-sm-4"> 
                                            <input type="text" placeholder=" " className="form-control input-underline1"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-2 control-label">Length</label>
                                        <div className="col-sm-10">
                                            <input type="text" placeholder="  " className="form-control input-underline1"/>
                                        </div>
                                    </div>

                                     <div className="form-group">
                                        <label className="col-sm-2 control-label">Declawed</label>
                                        <div className="col-sm-10">
                                            <input type="text" placeholder="Yes/No" className="form-control input-underline1"/>
                                        </div>
                                    </div>

                                     <div className="form-group">
                                        <label className="col-sm-2 control-label">Outdoor</label>
                                        <div className="col-sm-10">
                                            <input type="text" placeholder="Yes/No" className="form-control input-underline1"/>
                                        </div>
                                    </div>

                                     <div className="form-group">
                                        <label className="col-sm-2 control-label">Fixed</label>
                                        <div className="col-sm-10">
                                            <input type="text" placeholder="Yes/No" className="form-control input-underline1"/>
                                        </div>
                                    </div>

                                     <div className="form-group">
                                        <label className="col-sm-2 control-label">Date of Death</label>
                                        <div className="col-sm-10">
                                            <input type="text" placeholder="1990-02-10" className="form-control input-underline1"/>
                                        </div>
                                    </div>

                                     <div className="form-group">
                                        <label className="col-sm-2 control-label">Reason for Death</label>
                                        <div className="col-sm-10">
                                            <input type="text" placeholder=" " className="form-control input-underline1"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-10">
                                            <div className="pull-right">
                                                <button type="submit" className="btn btn-default">Cancel</button>
                                                <button type="submit" className="btn btn-primary">Save</button>
                                            </div>
                                        </div>
                                    </div>

                                </fieldset>
                            </form>
                        </div>
                    </div>   
                </Jumbotron>
            </div>
        );
    }

});

$(".dropdown-menu li a").click(function(){
    var selText = $(this).text();
    $(this).parents('.dropdown').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});




export default CatEdit;
