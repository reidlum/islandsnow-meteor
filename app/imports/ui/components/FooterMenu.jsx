import React from 'react';
import { Nav } from 'react-bootstrap';

const FooterMenu = () => (
  <footer>
    <div className="container">
      <div className="row pt-3">
        <div className="col">
          NAVIGATION
          <hr />
          <Nav.Link className="pb-2">About Us</Nav.Link>
          <Nav.Link className="pb-2">Employment</Nav.Link>
          <Nav.Link className="pb-2">Videos</Nav.Link>
        </div>
        <div className="col">
          MAIN MENU
          <hr />
          <Nav.Link className="pb-2">Men</Nav.Link>
          <Nav.Link className="pb-2">Women</Nav.Link>
          <Nav.Link className="pb-2">Kids</Nav.Link>
        </div>
        <div className="col">
          CONNECT
          <hr />
          <div className="pb-2">Sign up for latest updates</div>
          <input type="text" placeholder="Enter Email Address" />
          <div className="btn btn-dark">Join</div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterMenu;
