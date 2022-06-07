import * as React from 'react';
import ListDropdown from './ListDropdown';
import styled from "@emotion/styled";

const ListCard = styled.main`
    display: flex;
    flex-direction: column;
`

const List = (info) => {
    return (
        <ListCard>
            {info.info.map((item: string, index: number) => {
                return <ListDropdown {...info.info[index]}></ListDropdown>
            })}
        </ListCard>
    )
}

function log_data(data){
    console.log(data)
}

export default List