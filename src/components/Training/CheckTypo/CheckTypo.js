import React, { useState } from 'react'
//
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
//
function validateTypo(word1, word2) {
    // Remove diacritic symbols (accents)
    const normalized1 = word1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const normalized2 = word2.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // Use localeCompare for case-insensitive comparison
    return normalized1.localeCompare(normalized2, undefined, { sensitivity: 'base' }) === 0;
}
//
const CheckTypo = ({ word, onComplete }) => {
    const [userTypedWord, setUserTypedWord] = useState(null)
    const [errorLabel, setErrorLabel] = useState(null)
    const [validationResult, setValidationResult] = useState(null)
    //
    const validateOnce = () => {
        if (validationResult)
            return
        const isValid = validateTypo(word.value, userTypedWord)
        setValidationResult({ isValid: isValid })
        if (!isValid)
            setErrorLabel(word.value)
        onComplete(!isValid)
    }
    // props
    const getColor = () => {
        if (!validationResult)
            return `primary`
        return validationResult.isValid ? `success` : `error`
    }
    //
    return (
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 1, alignItems: 'center' }}>
            <TextField
                sx={{ flexGrow: 1 }}
                noValidate
                autoComplete='off'
                required
                error={errorLabel}
                label={errorLabel}
                disabled={validationResult}
                value={userTypedWord}
                onChange={e => setUserTypedWord(e.target.value)}
            />
            <Button
                variant={validationResult ? `contained` : `outlined`}
                disabled={!userTypedWord}
                color={getColor()}
                onClick={validateOnce}>
                Check
            </Button>
        </Box>
    )
}

export default CheckTypo