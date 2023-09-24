import React, { useState } from 'react'
//
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//
const Choice = ({ options }) => {
    const [choosenIndex, setChoosenIndex] = useState(-1)
    const chooseOnce = (index) => {
        if (choosenIndex === -1)
            setChoosenIndex(index)
    }
    // props
    const getVariant = () => {
        if (choosenIndex === -1)
            return `outlined`
        return `contained`
    }
    const getDisabled = (index) => {
        if (choosenIndex === -1)
            return false
        return (index !== choosenIndex)
    }
    const getColor = (isCorrect) => {
        if (choosenIndex === -1)
            return `primary`
        return isCorrect ? `success` : `error`
    }
    //
    return (
        <Stack direction="row" spacing={1}>
            {options.map((x, index) =>
                <Button
                    key={x.key}
                    variant={getVariant()}
                    color={getColor(x.isCorrect)}
                    disabled={getDisabled(index)}
                    onClick={() => chooseOnce(index)}>
                    {x.value}
                </Button>
            )}
        </Stack>
    )
}

export default Choice