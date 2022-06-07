import * as React from 'react';
import ListDropdown from './ListDropdown';
import styled from "@emotion/styled";
import { LayoutGroup } from "framer-motion"

const ListCard = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #EEF1EF;
    padding-bottom: 15rem;
`

const List = (info) => {
    return (
        <LayoutGroup>
            <ListCard >
                {info.info.map((item: string, index: number) => {
                    return <ListDropdown {...info.info[index]}></ListDropdown>
                })}
            </ListCard>
        </LayoutGroup>
    )
}

export default List