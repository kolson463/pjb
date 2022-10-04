import type { NextPage } from 'next'

import Link from 'next/link'
import E_Header from '../../components/e_header'


const E_DashBoard: NextPage = () => {
    return (
        <div >

          <E_Header />

<main >
        <h1 >
          Welcome to Company Job List
        </h1>


        <div >
          <a href="https://nextjs.org/docs" >
            <h2>Project 1 &rarr;</h2>
            <p>Create an account to upload projects and find jobs using your skills.</p>
          </a>

          <a href="https://nextjs.org/learn" >
            <h2>an Employer &rarr;</h2>
            <p>Create an account to post jobs and find candidates who have demonstrated the skills you need.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
          
          >
            <h2>Here to Log In &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

         
        </div>
      </main>
       
      </div>


    )
  }

  export default E_DashBoard