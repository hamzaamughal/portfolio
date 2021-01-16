import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from '../components/SEO';

const ProjectsPage = ({ data: { allStrapiProjects: { nodes: projects } } }) => {
  return <Layout>
    <SEO title="Projects" description="the projects page by hamza_mughal" />
    <section className="projects-page">
      <Projects projects={projects} title="All Projects" />
    </section>
  </Layout>
}

export const query = graphql`
{
  allStrapiProjects {
    nodes {
      github
      id
      title
      description
      url
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          title
          id
        }
      }
    }
  }
`

export default ProjectsPage
