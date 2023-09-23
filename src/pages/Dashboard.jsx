import React, { useContext } from 'react'
import { AppDataContext } from '../App'
//
const Dashboard = () => {
  const { categories } = useContext(AppDataContext)

  return (
    <>
      {categories
        .map((category) =>
          <ul key={category.key}>{category.value} {category.count}</ul>
        )}
    </>
  )
}

export default Dashboard