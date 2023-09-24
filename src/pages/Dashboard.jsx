import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { AppDataContext } from '../App'
//
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import LinearProgress from '@mui/material/LinearProgress';
//
const LinearProgressWithLabel = (props) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="primary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
//
const Dashboard = () => {
  const { categories } = useContext(AppDataContext)
  return (
    <Stack sx={{ pt: 2, gap: 2 }}>
      {categories
        .map((category) =>
          <Card key={category.key}>
            <CardActionArea component={NavLink} to={`training/:${category.key}`}>
              <CardHeader sx={{ pb: 0 }}
                title={category.value}
                subheader={`Totall words: ${category.count}`} />
              <CardContent>
                <LinearProgressWithLabel value={75} />
              </CardContent>
            </CardActionArea>
          </Card>
        )}
    </Stack>
  )
}

export default Dashboard