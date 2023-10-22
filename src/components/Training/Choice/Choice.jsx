import React, { useState } from 'react'
//
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//
const Choice = ({ word, onComplete }) => {
    const [choosenIndex, setChoosenIndex] = useState(-1)
    const chooseOnce = (index, option) => {
        if (choosenIndex !== -1)
            return
        setChoosenIndex(index)
        onComplete(!option.isCorrect)
    }
    // props
    const getColor = (isCorrect) => {
        if (choosenIndex === -1)
            return `primary`
        return isCorrect ? `success` : `error`
    }
    //
    return (
        <Stack direction="row" spacing={1}>
            {word.options.map((x, index) =>
                <Button
                    key={x.key}
                    variant={(choosenIndex === -1) ? `outlined` : `contained`}
                    color={getColor(x.isCorrect)}
                    disabled={(choosenIndex !== -1) && (index !== choosenIndex)}
                    onClick={() => chooseOnce(index, x)}>
                    {x.value}
                </Button>
            )}
        </Stack>
    )
}

export default Choice