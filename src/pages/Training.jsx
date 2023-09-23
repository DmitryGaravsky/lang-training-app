import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Training/Card/Card";
import Pager from "../components/Training/Pager/Pager";
//
import { AppDataContext } from "../App";
import wordsService from "../API/wordsService";
//
const Training = () => {
    const { source, target } = useContext(AppDataContext)
    const [words, setWords] = useState([])
    const [pageIndex, setPageIndex] = useState(0)
    const [limit] = useState(2)
    //
    const prevPage = (e) => {
        if (pageIndex > 0)
            setPageIndex(pageIndex - 1)
    }
    const nextPage = (e) => {
        if ((pageIndex + 1) * limit < words.length)
            setPageIndex(pageIndex + 1)
    }
    const pagerFilter = (index) => {
        return (index >= pageIndex * limit) && (index < (pageIndex + 1) * limit)
    }
    //
    useEffect(() => {
        setWords(wordsService.getWordsWithOptions(source, target))
    }, [source, target])

    return (
        <>
            {words
                .filter((_, index) => pagerFilter(index))
                .map((word) =>
                    <Card key={word.key} word={word} />
                )}
            <Pager nextPage={nextPage} prevPage={prevPage} />
        </>
    );
}

export default Training