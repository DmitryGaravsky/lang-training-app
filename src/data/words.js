// Predefined words
import family_category from "./family/category";
import family_words_en from "./family/words.en";
import family_words_es from "./family/words.es";
import family_words_ru from "./family/words.ru";
//
import numbers_category from "./numbers/category";
import numbers_words_en from "./numbers/words.en";
import numbers_words_es from "./numbers/words.es";
import numbers_words_ru from "./numbers/words.ru";
//
import greeting_category from "./greeting/category";
import greeting_words_en from "./greeting/words.en";
import greeting_words_es from "./greeting/words.es";
import greeting_words_ru from "./greeting/words.ru";
//
import products_category from "./products/category";
import products_words_en from "./products/words.en";
import products_words_es from "./products/words.es";
import products_words_ru from "./products/words.ru";
//
const PredefinedWords = [
    {
        category: family_category,
        words_en: family_words_en,
        words_es: family_words_es,
        words_ru: family_words_ru,
    },
    {
        category: numbers_category,
        words_en: numbers_words_en,
        words_es: numbers_words_es,
        words_ru: numbers_words_ru,
    },
    {
        category: greeting_category,
        words_en: greeting_words_en,
        words_es: greeting_words_es,
        words_ru: greeting_words_ru,
    },
    {
        category: products_category,
        words_en: products_words_en,
        words_es: products_words_es,
        words_ru: products_words_ru,
    }]

    export default PredefinedWords;