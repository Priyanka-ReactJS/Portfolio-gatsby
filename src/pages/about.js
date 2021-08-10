import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


const AboutPage = () => {
  return (
    <Layout>
        <h1>Abot me</h1>
        <p>I am Curruntly working full-time in intuit.</p>
        <p><Link to="/contact">Wonts To work with me? Reach out.</Link></p>
    </Layout>
    
  )
} 
export default AboutPage