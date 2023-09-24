import React, { useContext } from 'react'
import { AppDataContext } from '../App'
//
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
//
const Dictionary = () => {
  const { categories } = useContext(AppDataContext)

  return (
    <Stack sx={{ pt: 2, gap: 2 }}>
      {categories
        .map((category) =>
          <Card key={category.key}>
            <CardHeader sx={{ pb: 0 }}
              title={category.value}
              subheader={`Totall words: ${category.count}`}
            />
            <CardActions>
              <Button variant='text' >Add Words</Button>
              <Button variant='text' >Reset Progress</Button>
            </CardActions>
          </Card>
        )}
      <Fab variant="extended" color="primary" aria-label="add"
        sx={{ alignSelf: 'flex-end' }}>
        <AddIcon />Add Category
      </Fab>
    </Stack>
  )
}

export default Dictionary