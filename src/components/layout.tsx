import * as React from "react";
import { Link } from "gatsby";

const descriptionStyle = {
    color: "#232129",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
  }

const Layout = ({pageTitle, children}) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <nav>
                <h2>VAUGHAN LOVE</h2>
            </nav>
            <main style={descriptionStyle}>
                {children}
            </main>
        </div>
    )
}

export default Layout