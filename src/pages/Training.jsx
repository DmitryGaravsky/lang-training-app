import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//
import TrainingItem from "../components/Training/TrainingItem";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//
import { AppDataContext } from "../App";
import wordsService from "../API/wordsService";
//
const pagerArrows = { previous: ArrowBackIcon, next: ArrowForwardIcon };
//
const Training = () => {
    const { source, target, voice } = useContext(AppDataContext)
    const { category } = useParams();
    //
    const [words, setWords] = useState([])
    const [pageIndex, setPageIndex] = useState(1)
    const [pagesCount, setPagesCount] = useState(0)
    //
    const limit = 3
    useEffect(() => {
        const wordsWithOptions = wordsService.getWordsWithOptions(source, target, category)
        setWords(wordsWithOptions)
        const totalPages = Math.ceil(wordsWithOptions.length / limit)
        setPagesCount(totalPages)
    }, [source, target, category])
    //
    const pagerFilter = useCallback((index) => {
        const start = (pageIndex - 1) * limit;
        return (index >= start) && (index < start + limit)
    }, [pageIndex])
    //
    return (
        <Stack sx={{ pt: 2, gap: 2 }}>
            {words
                .filter((_, index) => pagerFilter(index))
                .map((word) =>
                    <TrainingItem key={word.key} word={word} voice={voice} />
                )}
            {(pagesCount > 1) ?
                <Pagination
                    shape="rounded" size="large"
                    sx={{ pt: 2, gap: 2, alignSelf: 'flex-end' }}
                    count={pagesCount}
                    onChange={(_, index) => setPageIndex(index)}
                    renderItem={(item) => (
                        <PaginationItem {...item} slots={pagerArrows} />
                    )}
                /> : <></>
            }
        </Stack>
    );
}

export default Training