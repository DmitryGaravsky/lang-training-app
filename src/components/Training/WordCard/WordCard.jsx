import React, { useEffect, useState } from 'react'
//
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
//
import progressService from '../../../API/progressService';
import Choice from '../Choice/Choice';
import CircularProgressBox from '../../Progress/Circular';
import SpeakerButton from '../../Speaker/SpeakerButton';
//
const WordCard = ({ word, voice }) => {
  const [isSomethingChoosen, onSomethingChoosen] = useState(false)
  const [progressIndicator, setProgressIndicator] = useState(null)
  //
  useEffect(() => {
    const { progress, errors } = progressService.getProgressByKeyword(word.options.category, word.key)
    if (progress !== 0 || errors !== 0)
      setProgressIndicator(<CircularProgressBox progress={progress} errors={errors} />)
    else setProgressIndicator(null)
  }, [isSomethingChoosen, word])
  //
  return (
    <Card>
      <CardHeader sx={{ pb: 0 }}
        title={word.value}
        subheader={word.synonyms}
        avatar={<SpeakerButton text={word.value} voice={voice} />}
        action={progressIndicator}
        titleTypographyProps={{ variant: "h3", color: "primary" }}
        subheaderTypographyProps={{ variant: "h6", color: "secondary" }}
      >
      </CardHeader>
      <CardContent sx={{ pt: 0 }}>
        <Typography variant='body1'>{word.transcript}</Typography>
        <Typography variant='body2'>{word.description}</Typography>
      </CardContent>
      <CardActions>
        <Choice options={word.options} keyword={word.key} onChoosen={onSomethingChoosen} />
      </CardActions>
    </Card>
  )
}

export default WordCard