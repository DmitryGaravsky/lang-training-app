import React from 'react'
//
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
//
import CheckTypo from '../CheckTypo/CheckTypo';
//
const TypoCard = ({ word, speaker, progress, onComplete }) => {
    const origin = word.options.find(x => x.isCorrect).value
    //
    return (
        <Card>
            <CardHeader sx={{ pb: 0 }}
                title={origin}
                subheader={word.description}
                avatar={speaker}
                action={progress}
                titleTypographyProps={{ variant: "h3", color: "primary" }}
                subheaderTypographyProps={{ variant: "h6", color: "secondary" }}
            >
            </CardHeader>
            <CardActions sx={{ padding: 2 }}>
                <CheckTypo word={word} onComplete={onComplete} />
            </CardActions>
        </Card>
    )
}

export default TypoCard