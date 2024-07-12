import React from 'react'
import Man from './assets/Man.png'
const ReactPage = () => {
  return (
    <div>
        <div className='container'>
        <div className='row d-flex align-items-center text-start' style={{fontFamily:"sans-serif"}}>
        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
        <h1>Hi,Hi,I'm John Doe</h1>
        <p className='mt-5 text-secondary'>A freelance Web Developer from London.I convert custom web designs to bootstrap templates.</p>
        <p className='text-secondary'>I make YouTube videos and write Blog</p>
        <button className='bg-primary rounded rounded-5 mt-4'>I'm Available</button>
        <span className='d-flex justify-content-between align-items-center w-25 fs-4 mt-5 text-secondary'><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-github"></i></span>
        </div>
        
        <div  className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
            <img src={Man} alt="person-image" className='img-fluid'/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ReactPage
