import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
//
const getProgressColor = (progress, errors) => {
    if (progress === 0 && errors === 0)
        return "primary"
    return (errors > 0) ? "error" : "success";
}
//
const LinearProgressBox = ({ progress, errors }) => {
    const progressColor = getProgressColor(progress, errors);
    const labelText = `${Math.round(progress)}%`;
    //
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" value={progress} color={progressColor} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="primary">
                    {labelText}
                </Typography>
            </Box>
        </Box>
    );
};

export default LinearProgressBox