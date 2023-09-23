import React, { useContext } from 'react'
import { AppDataContext } from '../App'
//
const Dictionary = () => {
  const { categories } = useContext(AppDataContext)

  return (
    <>
      {categories
        .map((category) =>
          <li key={category.key}>{category.value} {category.count}</li>
        )}
    </>
  )
}

export default Dictionary