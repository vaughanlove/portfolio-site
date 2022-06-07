import * as React from "react";
import { useState } from "react";
import {css}  from '@emotion/react';
import List  from "./List";
import styled from "@emotion/styled"

const data = {
    experience: [{
        title: "Quantitative Developer - Contract",
        for_i: "Feta Markets",
        info: "Researching stochastic volatility modelling for minimizing option price inefficiencies in the Black Scholes model for different asset classes.",
        skills: ["Python Data Analysis", "MongoDB", "Python Visualizations"],
        start: "MAY 2022",
        end: "present",
        link: "",
    },
    {
        title: "Quantitative Analyst - Contract",
        for_i: "Global Predictions",
        info: "Creating a knowledge graph that is responsible for mapping macroeconomic factors and identifying what drives markets. Custom modelled relationships created to accurately describe type of relationship, and variability of weight overtime.",
        skills: ["Graph Algorithms", "Python Graph Data Structures", "Timeseries Analysis"],
        start: "MAY 2021",
        end: "JAN 2022",
        link: "",
    },
    {
        title: "Student Researcher",
        for_i: "University of Calgary",
        info: "Researching the effect vision has on proprioception recovery in stroke patients using the Kinarm exoskeleton robot for data collection. ",
        skills: ["MATLAB", "Python", "Data Science"],
        start: "MAY 2021",
        end: "AUG 2021",
        link: "",
    },
],
    projects: [
    {
        title: "Rust P2P Typeracer",
        for_i: "",
        info: "A Rust Typeracer CLI program. Utilizes libp2p for communication. User can initiate a peer, connect peers locally, and begin a race. On completion of provided sentence, winner is broadcast to all participating nodes.",
        skills: ["Rust", "libp2p"],
        start: "",
        end: "",
        link: "https://github.com/vaughanlove/rust-p2p",
    },
    {
        title: "Altcoin Screener - WIP",
        for_i: "",
        info: "A screener made for dex-based coins on sushiswap/uniswap currently. Pulled hourly historical data such as transactions, volume, unique addresses, etc, and trained a RL model to predict 24/48 hour price action. Currently a basic visualizer deployed.",
        skills: ["Node.js", "Pytorch", "Vue", "express.js", "Javascript"],
        start: "",
        end: "",
        link: "https://github.com/vaughanlove/eb_screener_ui",
    },
    {
        title: "Portfolio Site",
        for_i: "",
        info: "This site. Previously only had experience with Vuejs so wanted React practice. No bootstrap or anything.",
        skills: ["React", "Gatsby", "TypeScript"],
        start: "",
        end: "",
        link: "https://github.com/vaughanlove/portfolio-site",
    },
    {
        title: "Autonomous Navigation",
        for_i: "",
        info: "School project where goal was to design a algorithm to enable a rover model to traverse a environment covered in obstacles. Rover was equipped with a LIDAR sensor and the 2D grid environment was modelled using it as the rover moved throughout the terrain.",
        skills: ["Python", "Grid traversal algorithms", "Machine Vision"],
        start: "",
        end: "",
        link: "https://github.com/vaughanlove/autonomous-navigation",
    },
    {
        title: "Cyber Fridge",
        for_i: "",
        info: "Web Application that allows a user to input ingredients on hand, and recieve an eligible recipe containing those ingredients as a result. Scraped 60k recipes and created a Neo4j db with the ingredients, recipes as nodes, and a INGREDIENT_IN relation to all the recipe nodes they're present in. Flask API for querying the db.",
        skills: ["Neo4j db", "Python web scraping", "python flask api", "Vue"],
        start: "",
        end: "",
        link: "https://github.com/vaughanlove/cyber-fridge",
    },
],
    education: [{
        title: "Applied Mathematics Engineering",
        for_i: "Queen's University",
        info: "Applied mathematics engineering at Queen's University with the computing option.",
        skills: [],
        start: "2019",
        end: "2023",
        link: "",
    },
    {
        title: "High School",
        for_i: "Western Canada Highschool",
        info: "",
        skills: [],
        start: "2016",
        end: "2019",
        link: "",
    },
],
    activities: [{
        title: "Solana Global Fellowship",
        for_i: "Solana Labs",
        info: "had the opportunity in November 2021 for Solana Labs to sponsor me to come to their conference in Lisbon, Portugal as a Global Fellow. ",
        skills: [],
        start: "",
        end: "",
        link: "",
    },
    {
        title: "ML Dev",
        for_i: "InQubate",
        info: "Developed a notification manager for market. Presented at the Canadian Undergraduate Conference on Artificial Intelligence.",
        skills: [],
        start: "",
        end: "",
        link: "",
    },
    {
        title: "Delegate",
        for_i: "CIRQUE",
        info: "Conference on Industry and Resources Queen's University Engineering.",
        skills: [],
        start: "",
        end: "",
        link: "",
    },
],
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
    font-family: quicksand;
    &:hover {
        background-color: #A9B4C2;
        border-right: 4px solid #1C2321;
        border-left: 1px solid #1C2321;
        border-top: 1px solid #1C2321;
        border-bottom: 4px solid #1C2321;
    }S
`

const Layout = ({pageTitle, children}) => {
    const [itemName, setItemName] = useState("experience");


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
                        <a href="mailto:vaughan.e.love@gmail.com" target="_blank">vaughan.e.love@gmail.com</a><br></br>

                    </ContactHeader>
                </TopHeader>
            </TitleBar>
            
            <CategoryBar>
                {Object.keys(data).map(category => (
                    <CategoryButton 
                        style={category==itemName ? {fontFamily: 'quicksand', fontWeight: 'bold', backgroundColor: '#A9B4C2', borderRight: '4px solid #1C2321', borderLeft: '1px solid #1C2321', borderTop: '1px solid #1C2321', borderBottom: '4px solid #1C2321'}: {}} 
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