import * as React from 'react';
import styled from "@emotion/styled";


const EntryCard = styled.main`
    background-color: white;
    border: 5px solid black;
    align-self: center;
    margin-top: 2rem; 
`

const ListDropdown = ({title, for_i, info, start, end}) => {
    return (
        <EntryCard>
            <h2>{title}</h2>
            <h3>{for_i}</h3>
            <h3>{info}</h3>
            <h3>{start}</h3>
            <h3>{end}</h3>
        </EntryCard>
    )
}

export default ListDropdown