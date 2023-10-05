import { NavLink } from "react-router-dom";
//
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
//
import progressService from '../../../API/progressService';
import LinearProgressBox from "../../Progress/Linear";
//
const CategoryCard = ({ category }) => {
    const path = `training/:${category.key}`
    const logo = category.key.substring(0, 2).toUpperCase()
    const { progress, errors } = progressService.getProgress(category.key)
    const stats = (errors > 0) ?
        `Totall words: ${category.count}, Errors: ${errors}` :
        `Totall words: ${category.count}`
    return (
        <Card>
            <CardActionArea component={NavLink} to={path}>
                <CardHeader sx={{ pb: 0 }}
                    avatar={<Avatar sx={{ bgcolor: blue[200] }}>{logo}</Avatar>}
                    title={category.value}
                    subheader={stats} />
                <CardContent>
                    <LinearProgressBox progress={progress} errors={errors} />
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CategoryCard