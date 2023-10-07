import PredefinedWords from '../data/words'
//
export default class jsonDataService {
    static getData(sourcelang, targetLang) {

        const source = [], target = [], categories = []
        PredefinedWords.forEach(cw => {
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