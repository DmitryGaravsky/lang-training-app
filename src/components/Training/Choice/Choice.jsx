import React, { useState } from 'react'
import styles from "./Choice.module.css";
//
const Item = ({ onClick, classes, children }) => {
    const className = styles.Item + " " + classes.join(' ')
    return (
        <div
            className={className}
            onClick={onClick}>
            {children}
        </div>
    )
}
//
const Choice = ({ options }) => {
    const [choosenIndex, setChoosenIndex] = useState(-1)
    const chooseOnce = (index) => {
        if (choosenIndex === -1)
            setChoosenIndex(index)
    }

    const getClasses = (index, isCorrect) => {
        const classes = []
        if (choosenIndex === -1)
            classes.push(styles.Ready)
        else {
            if (isCorrect)
                classes.push(styles.Correct)
            else
                classes.push(styles.Incorrect)
            if (index !== choosenIndex)
                classes.push(styles.Choosen)
        }
        return classes
    }

    return (
        <div className={styles.Group}>
            {options.map((x, index) =>
                <Item key={x.key}
                    classes={getClasses(index, x.isCorrect)}
                    onClick={() => chooseOnce(index)}>
                    {x.value}
                </Item>
            )}
        </div>
    )
}

export default Choice