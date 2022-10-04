import type { NextPage } from "next";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Link from "next/link";
import S_Header from "../../components/s_header";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import Offcanvas from "react-bootstrap/Offcanvas";

const S_Portfolio: NextPage = () => {
  type Project = {
    id: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    uploadDate: Date;
    lastEditDate: Date;
    tags?: string[];
    mediaURLs?: string[];
    mediaCoverURL?: string;
    pinned: boolean;
    projectViews?: number;
    projectApplications?: string[];
    whoCanSee?: string;
  };

  let initProjects: Project[] = [
    {
      id: "1",
      title: "NHL Player Guesser",
      shortDescription: "Wordle Like game to guess NHL Players",
      longDescription:
        "Wordle Like game to guess NHL Players. Built on Firebase backend and ",
      uploadDate: new Date(),
      lastEditDate: new Date(),
      tags: [],
      projectViews: 15,
      mediaURLs: [],
      pinned: true,
      whoCanSee: "Public",
    },
    {
      id: "2",
      title: "College Football Player Map",
      shortDescription: "Fun way to track cfb player origins",
      longDescription: "Built on svelte with mapbox API ",
      uploadDate: new Date(),
      lastEditDate: new Date(),
      tags: [],
      mediaURLs: [],
      pinned: true,
    },
  ];

  const [projects, setProjects] = useState(initProjects);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const [showUploadModal, setShowUploadModal] = useState(false);
  const handleCloseUploadModal = () => setShowUploadModal(false);
  const handleShowUploadModal = () => setShowUploadModal(true);

  const [showEditModal, setShowEditModal] = useState(false);
  const [modalEditData, setModalEditData] = useState({ id: "", project: "" });
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = (id: string, project: Project | any) => {
    setModalEditData({ id: id, project: project });
    setShowEditModal(true);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [modalDeleteData, setModalDeleteData] = useState({ id: "", title: "" });
  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleShowDeleteModal = (id: string, title: string) => {
    setModalDeleteData({ id: id, title: title });
    setShowDeleteModal(true);
  };

  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadShortDescription, setUploadShortDescription] = useState("");
  const [uploadLongDescription, setUploadLongDescription] = useState("");

  const uploadSubmit = () => {
    let newProjects = projects;
    newProjects.push({
      id: (newProjects.length + 1).toString(),
      title: uploadTitle,
      shortDescription: uploadShortDescription,
      longDescription: uploadLongDescription,
      uploadDate: new Date(),
      lastEditDate: new Date(),
      tags: [],
      mediaURLs: [],
      pinned: true,
    });
    console.log(initProjects);
    setProjects(newProjects);
    handleCloseUploadModal();
  };

  const editSubmit = (id: string, project: Project) => {
    let newProjects = projects;
    for (let index = 0; index < newProjects.length; index++) {
      if (newProjects[index].id === id) {
        newProjects[index] = project;
      }
    }
    setProjects(newProjects);
    handleCloseEditModal();
  };

  const removeProject = (id: string) => {
    let updatedProjects = [...projects].filter((project) => project.id !== id);
    setProjects(updatedProjects);
    selectProject(updatedProjects[0].id);
  };

  const selectProject = (id: string) => {
    for (let index = 0; index < projects.length; index++) {
      if (id === projects[index].id) {
        setSelectedProject(projects[index]);
      }
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {S_Header("/s/portfolio")}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Projects ({projects.length}){" "}
            <Button variant="primary" onClick={handleShowUploadModal}>
              Upload New Project
            </Button>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-group overflow-auto " style={{ height: "85vh" }}>
            {projects.map((project) => {
              return (
                <Card
                  style={{ width: "18rem", cursor: "pointer" }}
                  onClick={() => {
                    selectProject(project.id);
                  }}
                  key={project.id}
                  className={
                    project.id === selectedProject.id
                      ? " border border-2 border-info"
                      : "cursor cursor-pointer"
                  }
                >
                  <img className="card-img-top" src="" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">ID: {project.id}</p>
                    <p className="card-text">{project.shortDescription}</p>
                    <p className="card-text">
                      Last Edit: {project.lastEditDate.toDateString()}
                    </p>
                    <Button
                      variant="outline-secondary"
                      onClick={() => {
                        handleShowEditModal(project.id, project.title);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => {
                        handleShowDeleteModal(project.id, project.title);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </Card>
              );
            })}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <main>
        <h4 className="text-start">Username Portfolio</h4>
        <div className="container ">
          <Modal show={showUploadModal} onHide={handleCloseUploadModal}>
            <Modal.Header closeButton>
              <Modal.Title>Upload New Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <div className="form-group ">
                  <div className="w-50">
                    <div>
                      <label className="">Media:</label>
                      <input
                        type="file"
                        // value={uploadTitle}
                        // onChange={(e) => setUploadTitle(e.target.value)}
                      ></input>
                    </div>
                    <label className="">Title:</label>
                    <input
                      type="text"
                      value={uploadTitle}
                      onChange={(e) => setUploadTitle(e.target.value)}
                    ></input>
                    <Form.Group className="mb-3" controlId="formTags">
                      <Form.Label>Tags</Form.Label>
                      <Form.Control type="text" placeholder="Enter Tags" />
                    </Form.Group>
                    <label className="">Short Description:</label>
                    <input
                      type="text"
                      value={uploadShortDescription}
                      onChange={(e) =>
                        setUploadShortDescription(e.target.value)
                      }
                    ></input>
                    <label className="">Long Description:</label>
                    <input
                      type="text"
                      value={uploadLongDescription}
                      onChange={(e) => setUploadLongDescription(e.target.value)}
                    ></input>
                  </div>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseUploadModal}>
                Close
              </Button>
              <Button
                variant="primary"
                type="submit"
                onClick={() => uploadSubmit()}
              >
                Upload Project
              </Button>
            </Modal.Footer>
          </Modal>
          {showEditModal ? (
            <Modal show={true} onHide={handleCloseEditModal}>
              <Modal.Header closeButton>
                <Modal.Title>Edit {} </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <div className="form-group ">
                    <div className="w-50">
                      <div>
                        <label className="">Media:</label>
                        <input type="file"></input>
                      </div>
                      <label className="">Title:</label>
                      <input
                        type="text"
                        value={uploadTitle}
                        onChange={(e) => setUploadTitle(e.target.value)}
                      ></input>
                      <Form.Group className="mb-3" controlId="formTags">
                        <Form.Label>Tags</Form.Label>
                        <Form.Control type="text" placeholder="Enter Tags" />
                      </Form.Group>
                      <label className="">Short Description:</label>
                      <input
                        type="text"
                        value={uploadShortDescription}
                        onChange={(e) =>
                          setUploadShortDescription(e.target.value)
                        }
                      ></input>
                      <label className="">Long Description:</label>
                      <input
                        type="text"
                        value={uploadLongDescription}
                        onChange={(e) =>
                          setUploadLongDescription(e.target.value)
                        }
                      ></input>
                    </div>
                  </div>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEditModal}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => {
                    // editSubmit(modalEditData.id , modalEditData);
                    handleCloseEditModal();
                  }}
                >
                  Submit Edit
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            ""
          )}
          {showDeleteModal ? (
            <Modal show={true} onHide={handleCloseDeleteModal}>
              <Modal.Header closeButton>
                <Modal.Title>
                  Delete {modalDeleteData.title} permanently?
                </Modal.Title>
              </Modal.Header>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseDeleteModal}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => {
                    removeProject(modalDeleteData.id);
                    handleCloseDeleteModal();
                  }}
                >
                  Remove Project
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            ""
          )}
<Button
                className=""
                variant="primary"
                onClick={handleShow}
              >
                Select Project
              </Button>
          <div className="container">
            
              
              <h1 className="text-center">{selectedProject.title} </h1>
        

            <h6>
              Last Edit Date:{" "}
              {selectedProject.lastEditDate.toLocaleDateString()}
            </h6>
            <h6>Visibility: {selectedProject.whoCanSee}</h6>
            <h6>Views: {selectedProject.projectViews?.toString()}</h6>

            <Image
              src="/vercel.svg"
              alt="Photo Here"
              width={300}
              height={300}
            />
            <h6>
              Upload Date: {selectedProject.uploadDate.toLocaleDateString()}
            </h6>

            <h4>Short Description: {selectedProject.shortDescription}</h4>
            <h4>Long Description: {selectedProject.longDescription}</h4>
            <h4>External Links: </h4>
            <h4>Applications: {selectedProject.projectApplications} </h4>
          </div>
        </div>
      </main>
    </>
  );
};

export default S_Portfolio;
