import * as React from "react";
import { useState } from "react";
import {css}  from '@emotion/react';
import List  from "./List";
import styled from "@emotion/styled"

const data = {
    education: [{
        title: "Applied Mathematics Engineering",
        for_i: "Queen's University",
        info: "Applied mathematics engineering at Queen's University with the computing option",
        start: "01/09/2019",
        end: "01/06/2023",
    },
    {
        title: "Applied Mathematics Engineering",
        for_i: "Queen's University",
        info: "Applied mathematics engineering at Queen's University with the computing option",
        start: "01/09/2019",
        end: "01/06/2023",
    },
],
    experience: [{
        title: "Applied Mathematics Engineering",
        for_i: "Queen's University",
        info: "",
        start: "",
        end: "",
    }],
    projects: [{
        title: "Applied Mathematics Engineering",
        for_i: "Queen's University",
        info: "",
        start: "",
        end: "",
    }],
    skills: [{
        title: "Applied Mathematics Engineering",
        for_i: "Queen's University",
        info: "",
        start: "",
        end: "",
    }],
    activities: [{
        title: "Applied Mathematics Engineering",
        for_i: "Queen's University",
        info: "",
        start: "",
        end: "",
    }],
}

// name and description + contact info
const TitleBar = styled.nav`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #A9B4C2;
    lineHeight: 1;
`;

const TopHeader = styled.div`
    display: flex;
`

const NameHeader = styled.h1`
    color: #1C2321;
    flex: 1;
    fontFamily: Raleway;
    font-size: 4rem;
    text-align: center;
`;

const ContactHeader = styled.h4`
    flex-basis: 30%;
    align-self: center;
`;

const DescriptionHeader = styled.h3`
    color: #1C2321;
    flex: 1;
    font-size: 1.2rem;
    text-align: center;
`;

const CategoryBar = styled.div`
    display: flex;
    height: 4rem;
    color: #1C2321;
    justify-content: center;
    border-top: 5px solid #1C2321;
    border-bottom: 5px solid #1C2321;
    background-color: #7D98A1;
    margin: 0;
    padding: 0;
    gap: 2rem;
`

const CategoryButton = styled.button`
    background-color: #7D98A1;
    margin: 5px;
    border: 3px solid #7D98A1;
    &:hover {
        background-color: #A9B4C2;
        border-right: 4px solid #1C2321;
        border-left: 1px solid #1C2321;
        border-top: 1px solid #1C2321;
        border-bottom: 4px solid #1C2321;
    }
`

const Layout = ({pageTitle, children}) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <TitleBar >
                <TopHeader>
                    <NameHeader>Vaughan Love <br></br>
                    <DescriptionHeader> Applied Mathematics Computing Undergrad looking for a Quantitative SWE Role </DescriptionHeader>

                    </NameHeader>
                    <ContactHeader>
                        <a href="https://github.com/vaughanlove" target="_blank">GitHub</a><br></br>
                        <a href="https://github.com/vaughanlove" target="_blank">LinkedIn</a><br></br>
                        Contact Me
                    </ContactHeader>
                </TopHeader>
            </TitleBar>
            
            <CategoryBar>
                {Object.keys(data).map(category =>
                    <CategoryButton >{category}</CategoryButton>)}
            </CategoryBar>

            {renderList('education')}

            <main>
                {children}
            </main>
        </div>
    )
}

function renderList(param) {
    switch(param){
        case 'education':
            return <List info={data.education}></List>;
        case 'experience':
            return <List info={data.experience}></List>;
        case 'projects':
            return <List info={data.projects}></List>;
        case 'skills':
            return <List info={data.skills}></List>;
        case 'activities':
            return <List info={data.activities}></List>;
    }
}



export default Layout