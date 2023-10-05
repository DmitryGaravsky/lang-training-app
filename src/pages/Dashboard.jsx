import React, { useContext } from 'react'
import { AppDataContext } from '../App'
//
import Stack from '@mui/material/Stack';
import CategoryCard from '../components/Dashboard/CategoryCard/CategoryCard';
//
const Dashboard = () => {
  const { categories } = useContext(AppDataContext)
  return (
    <Stack sx={{ pt: 2, gap: 2 }}>
      {categories
        .map((category) =>
          <CategoryCard key={category.key} category={category} />
        )}
    </Stack >
  )
}

export default Dashboard