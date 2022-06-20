import { gql } from "@apollo/client"

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      title
      stack
      preview {
        url
        height
        width
      }
      localizations(includeCurrent: true) {
        content
        locale
      }
    }
  }
`

export default GET_PROJECTS
