import * as React from "react";
import { useState } from "react";
import {css}  from '@emotion/react';
import List  from "./List";
import styled from "@emotion/styled"

const data = {
    education: [{
        title: "Applied Mathematics Engineering",
        for_i: "Queen's University",
        info: "Applied mathematics engineering at Queen's University with the computing option.",
        start: "2019",
        end: "2023",
    },
    {
        title: "High School",
        for_i: "Western Canada Highschool",
        info: "",
        start: "2016",
        end: "2019",
    },
],
    experience: [{
        title: "Quantitative Developer - Contract",
        for_i: "Feta Markets",
        info: "",
        start: "MAY 2022",
        end: "present",
    },
    {
        title: "Quantitative Analyst - Contract",
        for_i: "Global Predictions",
        info: "",
        start: "MAY 2021",
        end: "JAN 2022",
    },
    {
        title: "Student Researcher",
        for_i: "University of Calgary",
        info: "",
        start: "MAY 2021",
        end: "AUG 2021",
    },
],
    projects: [{
        title: "Cyber Fridge",
        for_i: "",
        info: "",
        start: "",
        end: "",
    },
    {
        title: "Rust P2P",
        for_i: "",
        info: "",
        start: "",
        end: "",
    },
    {
        title: "Mars Rover",
        for_i: "",
        info: "",
        start: "",
        end: "",
    },
    {
        title: "Altcoin Screener - WIP",
        for_i: "",
        info: "",
        start: "",
        end: "",
    },
],
    activities: [{
        title: "Solana Global Fellowship",
        for_i: "Solana Labs",
        info: "had the opportunity in November 2021 for Solana Labs to sponsor me to come to their conference in Lisbon, Portugal as a Global Fellow. ",
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
    }S
`

const Layout = ({pageTitle, children}) => {
    const [itemName, setItemName] = useState("education");


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
                        <a href="https://www.linkedin.com/in/vaughan-love/" target="_blank">LinkedIn</a><br></br>
                        Contact Me
                    </ContactHeader>
                </TopHeader>
            </TitleBar>
            
            <CategoryBar>
                {Object.keys(data).map(category => (
                    <CategoryButton 
                        style={category==itemName ? {backgroundColor: '#A9B4C2', borderRight: '4px solid #1C2321', borderLeft: '1px solid #1C2321', borderTop: '1px solid #1C2321', borderBottom: '4px solid #1C2321'}: {}} 
                        onClick={() => setItemName(category)}
                        >{category}</CategoryButton>
                    )
                )}
            </CategoryBar>

            {renderList(itemName)}

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