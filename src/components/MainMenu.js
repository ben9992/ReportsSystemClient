import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function MainMenu() {
  return (
    <div className="menu-container">
      <Nav className="flex-column main-menu">
        <LinkContainer to="/">
          <Nav.Link className="custom-link">
            <i className="bi bi-house-door menu-item-icon-padding"></i> Home
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/reports">
          <Nav.Link className="custom-link">
            <i className="bi bi-file-earmark-text menu-item-icon-padding"></i>{" "}
            Reports
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/create">
          <Nav.Link className="custom-link">
            <i className="bi bi-book menu-item-icon-padding"></i> User Guide
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/analytics">
          <Nav.Link className="custom-link">
            <i className="bi bi-graph-up menu-item-icon-padding"></i> Analytics
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </div>
  );
}

export default MainMenu;
