import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Video from '../components/video'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Video src='/timelapse.mp4' />
    <Link to="/page-2/" style={{
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
    }}>Go to page 2</Link>
  </Layout>
)

export default IndexPage
