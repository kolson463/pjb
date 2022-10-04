import Head from "next/head";
import Link from "next/link";
import React from "react";
import Nav from "react-bootstrap/Nav";

function S_Header(selectedKey: string) {

  return (
    <>
      <Nav
        variant="pills"
        defaultActiveKey= {selectedKey}
       
        className="justify-content-end"
      >
        <Nav.Item>
          <Nav.Link href="/s/feed" eventKey="/s/feed">
            Jobs
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/s/portfolio" eventKey="/s/portfolio">
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/s/notifications">Notifications</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/s/profile" eventKey="/s/profile">
            Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/login" eventKey="/login">
            Log Out
          </Nav.Link>
        </Nav.Item>
      </Nav>

   
    </>
  );
}

export default S_Header;
