import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
//
import progressService from '../../../API/progressService';
//
const resetCategory = (category) => {
    progressService.reset(category.key, category.count)
}
const CategoryCard = ({ category }) => {
    const totalWords = `Totall words: ${category.count}`
    return (
        <Card key={category.key} variant='outlined'>
            <CardHeader sx={{ pb: 0 }}
                title={category.value}
                subheader={totalWords}
            />
            <CardActions>
                <Button variant='text'>
                    Add Words
                </Button>
                <Button variant='text'
                    onClick={() => resetCategory(category)}>
                    Reset Progress
                </Button>
            </CardActions>
        </Card>
    )
}

export default CategoryCard