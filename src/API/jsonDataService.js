// Predefined words
import family_category from "../data/family/category";
import family_words_en from "../data/family/words.en";
import family_words_es from "../data/family/words.es";
//
import numbers_category from "../data/numbers/category";
import numbers_words_en from "../data/numbers/words.en";
import numbers_words_es from "../data/numbers/words.es";
//
import greeting_category from "../data/greeting/category";
import greeting_words_en from "../data/greeting/words.en";
import greeting_words_es from "../data/greeting/words.es";
//
export default class jsonDataService {
    static getData(sourcelang, targetLang) {
        const categorizedWords = [
            {
                category: family_category,
                words_en: family_words_en,
                words_es: family_words_es,
            },
            {
                category: numbers_category,
                words_en: numbers_words_en,
                words_es: numbers_words_es,
            },
            {
                category: greeting_category,
                words_en: greeting_words_en,
                words_es: greeting_words_es,
            }]
        const source = [], target = [], categories = []
        categorizedWords.forEach(cw => {
            const sourceWords = cw['words_' + sourcelang]
            const targetWords = cw['words_' + targetLang]
            if (!sourceWords && !targetWords)
                return
            const category = cw.category
            const sourceKeys = new Map()
            sourceWords.forEach(sw => sourceKeys.set(sw.key, sw))
            let counter = 0
            targetWords.forEach(tw => {
                const sw = sourceKeys.get(tw.key);
                if (sw) {
                    counter++
                    source.push({ ...sw, category: category.key })
                    target.push({ ...tw, category: category.key })
                }
            })
            if (counter > 0)
                categories.push({ ...category, count: counter })
        })
        return { source, target, categories };
    }
}