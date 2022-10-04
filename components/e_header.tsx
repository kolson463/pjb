import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

function E_Header() {
  return (
    <ul className="nav nav-pills justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/e/feed">Jobs</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/e/dashboard">Dashboard</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/e/profile">Profile</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/login">Log Out</a>
  </li>
 
</ul>
    
    
  )
}

export default E_Header
