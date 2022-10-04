import type { NextPage } from "next";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

import Link from "next/link";
import S_Header from "../../components/s_header";

const S_Feed: NextPage = () => {
  type Job = {
    job_id: string;
    title: string;
    company_name: string;
    company_id: string;
    company_logo_url?: string;
    shortDescription: string;
    longDescription: string;
    uploadDate: Date;
    lastEditDate: Date;
    tags?: string[];
    mediaURLs?: string[];
    mediaCoverURL?: string;
    saved?: boolean;
    projectViews?: number;
    applied?: boolean;
  };

  let initJobs: Job[] = [
    {
      job_id: "1",
      title: "JavaScript Dev 1",
      company_id: "123",
      company_name: "Ameritas",
      shortDescription: "We Need",
      longDescription:
        "Wordle Like game to guess NHL Players. Built on Firebase backend and ",
      uploadDate: new Date(),
      lastEditDate: new Date(),
      tags: [],
      projectViews: 15,
      mediaURLs: [],
      applied: true,
    },
    {
      job_id: "1",
      title: "Backend Dev 2",
      company_id: "123",
      company_name: "Ameritas",
      shortDescription: "We Need",
      longDescription:
        "Wordle Like game to guess NHL Players. Built on Firebase backend and ",
      uploadDate: new Date(),
      lastEditDate: new Date(),
      tags: [],
      projectViews: 15,
      mediaURLs: [],
      applied: true,
    },
  ];

  const [jobs, setJobs] = useState(initJobs);
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  const selectJob = (id: string) => {
    for (let index = 0; index < jobs.length; index++) {
      if (id === jobs[index].job_id) {
        setSelectedJob(jobs[index]);
      }
    }
  };

  return (
    <div>
      {S_Header("/s/feed")}

      <main>
        <h1>Seeker Job Feed</h1>

        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <div className="container text-center ">
          <div className="row">
            <div className="col ">
              <ul
                className="list-group overflow-auto "
                style={{ height: "85vh" }}
              >
                {jobs.map((job) => {
                  return (
                    <Card
                      style={{ width: "18rem", cursor: "pointer" }}
                      onClick={() => {
                        selectJob(job.job_id);
                      }}
                      key={job.job_id}
                      className={
                        job.job_id === selectedJob.job_id
                          ? " border border-2 border-info"
                          : "cursor cursor-pointer"
                      }
                    >
                      <img
                        className="card-img-top"
                        src=""
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{job.title}</h5>
                        <p className="card-text">Job ID: {job.job_id}</p>
                        <p className="card-text">{job.shortDescription}</p>
                        <p className="card-text">
                          Last Edit: {job.lastEditDate.toDateString()}
                        </p>
                        <Button
                          variant="outline-secondary"
                          onClick={() => {
                            // handleShowEditModal(project.id, project.title);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline-danger"
                          onClick={() => {
                            // handleShowDeleteModal(project.id, project.title);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </ul>

              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Job Title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default S_Feed;
