import React from 'react'

const Home = () => {
  return (
    <div style={{width:"50%" ,margin:"10% auto"}}>
      <h1>Wel Come</h1>
      <p>This application shows products catalouge having well-defined navigation through different pages such as HOME,LOGIN,ABOUT,PRODUCT. The Products page will display a list of products fetched from a JSON Placeholder API. Additionally, there will be a Project page where users can view details of a specific product. The Products page should be private and accessible only to authenticated users. Axios will be used for making network requests. </p>
    </div>
  )
}

export default Home
