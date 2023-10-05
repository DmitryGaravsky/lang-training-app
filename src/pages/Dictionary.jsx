import React, { useContext } from 'react'
import { AppDataContext } from '../App'
//
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CategoryCard from '../components/Dictionary/CategoryCard/CategoryCard';
//
const Dictionary = () => {
  const { categories } = useContext(AppDataContext)
  return (
    <Stack sx={{ pt: 2, gap: 2 }}>
      {categories
        .map((category) =>
          <CategoryCard key={category.key} category={category} />
        )}
      <Fab sx={{ alignSelf: 'flex-end' }}
        variant="extended"
        color="primary"
        aria-label="add" >
        <AddIcon />Add Category
      </Fab>
    </Stack>
  )
}

export default Dictionary