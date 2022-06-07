import * as React from 'react';
import styled from "@emotion/styled";
import {motion} from 'framer-motion';
import { useState } from 'react';

const card = {
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: "2rem",
    width: "30%",
    padding: "2rem",
    borderRadius: "1rem",
}

const ListDropdown = ({title, for_i, info, start, end}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
            <motion.div layout whileHover={{ scale: 1.1 }} onClick={() => setIsOpen(!isOpen)} style={card}>
                <motion.h2 layout >{title}</motion.h2>
                <motion.h3 layout> {for_i}  |   {start} to {end}</motion.h3>
                {(info.length != 0 && !isOpen) && (<motion.p layout> ↓ ↓ </motion.p>)}
                {isOpen && (
                <motion.div layout>
                    <p>{info}</p>
                </motion.div>
                )}
                
            </motion.div>
                )
}

export default ListDropdown