import type { NextPage } from "next";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Offcanvas from 'react-bootstrap/Offcanvas';


import S_Header from "../../components/s_header";


const S_Profile: NextPage = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {S_Header("/s/profile")}

      <div >
        <main >
          <h1 >Username Profile</h1>
          <>
          <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
  

      
    </>
        </main>
      </div>


    
      

    </>
  );
};

export default S_Profile;
