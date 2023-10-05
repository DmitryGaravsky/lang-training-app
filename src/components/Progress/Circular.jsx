import React from 'react';
//
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
//
export const getProgressColor = (progress, errors) => {
  if (progress === 0 && errors === 0)
    return "primary"
  return (errors > 0) ? "error" : "success";
}
//
const CircularProgressBox = ({ progress, errors }) => {
  const boxStyle = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const progressColor = getProgressColor(progress, errors);
  const labelText = (errors > 0) ? `${errors}` : `${Math.round(progress)}%`;
  //
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={progress} color={progressColor} />
      <Box sx={boxStyle}>
        <Typography variant="caption" component="div" color="text.secondary">{labelText}</Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressBox