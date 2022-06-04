import * as React from "react";
import { Link } from "gatsby";

const navStyle = {
    textAlign: "center",
    marginBottom: 48,
}

const nameStyle = {
    color: "#0e0157",
    fontWeight: "bold",
    fontSize: 50,
}

const nameStyle2 = {
    color: "#0e0157",
    fontWeight: "bold",
    fontSize: 20,
}

const hyperLinks = {
    color: "#000000",
    fontWeight: "bold",
    paddingLeft: "22px",
    paddingRight: "22px",
    fontSize: 18,
    float: "left",
}

const listLay = {
    display: "inline-block",
    alignText: "center",
}


const Layout = ({pageTitle, children}) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <nav style={navStyle}>
                <h1 style={nameStyle}>VAUGHAN LOVE</h1>
                <h3 style={nameStyle2}> Applied Mathematics Computing Undergrad looking for a Quantitative SWE Role </h3><br></br>
                <div style={listLay}>
                    <a style={hyperLinks}>403-973-2236</a>
                    <a style={hyperLinks}>vaughan.e.love@gmail.com</a>
                    <a href="https://github.com/vaughanlove" target="_blank" style={hyperLinks}>GitHub</a>
                </div>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout