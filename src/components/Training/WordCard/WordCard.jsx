import React from 'react';
import Choice from '../Choice/Choice';
//
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
//
const WordCard = ({ word }) => {
  return (
    <Card>
      <CardHeader sx={{ pb: 0 }}
        title={word.value}
        subheader={word.synonims}
        titleTypographyProps={{ variant: "h3", color: "primary" }}
        subheaderTypographyProps={{ variant: "h6", color: "secondary" }}
      >
      </CardHeader>
      <CardContent sx={{ pt: 0 }}>
        <Typography variant='body1'>{word.transcript}</Typography>
        <Typography variant='body2'>{word.description}</Typography>
      </CardContent>
      <CardActions>
        <Choice options={word.options} />
      </CardActions>
    </Card>
  )
}

export default WordCard