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

const ListDropdown = ({title, for_i, info, skills, link, start, end}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
            <motion.div layout whileHover={{ scale: 1.1 }} onClick={() => setIsOpen(!isOpen)} style={card}>
                <motion.h2 layout >{title}</motion.h2>
                {(start.length != 0 ) && (
                    <motion.h3 layout> {for_i}  |   {start} to {end}</motion.h3>
                )}
                {(info.length != 0 && !isOpen) && (<motion.p layout> ↓ ↓ </motion.p>)}
                {isOpen && (
                <motion.div layout>
                    <p>{info}</p>
                </motion.div>
                )}
                {(skills.length != 0 && isOpen) && (
                    <motion.div layout>
                    <motion.h3 layout>Skills:</motion.h3>
                        <motion.ul layout>
                            {skills.map((item: string, index: number) => {
                                return <motion.li>{item}</motion.li>
                            })}
                        </motion.ul>
                    </motion.div>
                )}
                {(link.length != 0 && isOpen) && (
                    <motion.div layout>
                        <motion.a layout target="_blank" href={link}>link</motion.a>
                    </motion.div>
                )
                }
                
            </motion.div>
                )
}

export default ListDropdown