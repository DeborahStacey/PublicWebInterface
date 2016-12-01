import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';

var Blank = React.createClass({
  render: function() {
    return (
      <div className="faq-page" key="faq"> 
        <Link to="/dashboard/faq" className="pull-right btn btn-primary btn-outline btn-rounded">FAQ</Link> 
        <h2>FAQ</h2> 
        <Jumbotron> 
          <h1>Frequently Asked Questions!</h1> 
           <br/>

          <font size="5" color="black" face="times">Q: Why is WellCat useful? </font> <br />
          <font size="4">A: WellCat is an important tool for the health of cats around the World. 50% of cats never get to see a veterinarian. 
          The information that you, the users, will be putting onto WellCat could potentially provide data that we may have never known about cat health and the signs that they are getting sick. 
          This service is easily updateable and can help cat professionals and owners improve the health of cats everywhere.</font>
          <br/><br/>

          <font face="times" size="5" color="black">Q: What can I do on WellCat? </font> <br />
          <font size="4">A: On WellCat, you can provide important information on your cats with cat portfolios. 
          You can visit other users' profiles and read information about cats.</font>
          <br/><br/>

          <font face="times" size="5" color="black ">Q: How public is my information? </font> <br />
          <font size="4">A: You can choose to make all of your info private to other users or just block certain people you don't want on your profile. 
          Only your cat's information is stored in our WellCat databases.</font>
          <br/><br/>

        </Jumbotron> 
      </div>
    );
  }

});

export default Blank;
