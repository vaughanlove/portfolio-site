import { getArgumentValues } from "graphql/execution/values"
import * as React from "react"
import Layout from '../components/layout'

// styles
const pageStyles = {
  backgroundColor: "#EEF1EF",
  position: "absolute",
  fontFamily: "Raleway, Roboto, sans-serif, serif",
  margin: "-0.5em",
  height: "100%",
  width: "100%"
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Layout pageTitle="Vaughan Love"></Layout>
    </main>
  )
}

export default IndexPage
