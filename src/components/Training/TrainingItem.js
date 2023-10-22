import React, { useCallback, useEffect, useState } from 'react'
//
import WordCard from "./WordCard/WordCard";
import TypoCard from "./TypoCard/TypoCard";
//
import progressService from '../../API/progressService';
import CircularProgressBox from '../Progress/Circular';
import SpeakerButton from '../Speaker/SpeakerButton';
//
const setProgress = (word, hasError) => {
    if (hasError)
        progressService.setError(word.options.category, word.key)
    else
        progressService.setCorrect(word.options.category, word.key)
}
//
const TrainingItem = ({ word, voice }) => {
    const [attemptsCount, setAttemptsCount] = useState(0)
    const [progressComponent, setProgressComponent] = useState(null)
    const [cardType, setCardType] = useState(null)
    //
    const onComplete = useCallback((hasError) => {
        setProgress(word, hasError)
        setAttemptsCount(value => value + 1)
    }, [word])
    //
    useEffect(() => {
        const { progress, errors } = progressService.getProgressByKeyword(word.options.category, word.key)
        if (progress !== 0 || errors !== 0)
            setProgressComponent(<CircularProgressBox progress={progress} errors={errors} />)
        else
            setProgressComponent(null)
        if ((attemptsCount % 2) !== 0)
            setCardType("TypoCard")
    }, [attemptsCount, word])
    const speakerComponent = (<SpeakerButton text={word.value} voice={voice} />)
    //
    switch (cardType) {
        case "WordCard":
            return (
                <WordCard word={word}
                    speaker={speakerComponent}
                    progress={progressComponent}
                    onComplete={onComplete} />
            )
        case "TypoCard":
            return (
                <TypoCard word={word}
                    speaker={speakerComponent}
                    progress={progressComponent}
                    onComplete={onComplete} />
            )
        default:
            return (
                <WordCard word={word}
                    speaker={speakerComponent}
                    progress={progressComponent}
                    onComplete={onComplete} />
            )
    }
}

export default TrainingItem