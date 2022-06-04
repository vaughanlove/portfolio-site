import * as React from "react"
import Layout from '../components/layout'

// styles
const pageStyles = {
  backgroundColor: "#f9faf2",
  color: "#232129",
  padding: 48,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const descriptionStyle = {
  color: "#000000",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Layout pageTitle="Vaughan Love">
      </Layout>
    </main>
  )
}

export default IndexPage
