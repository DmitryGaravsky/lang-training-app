export default class wordsService {
    static getWordsWithOptions(sourceWords, targetWords, category) {
        const filterByCategory = wordsService.#getFilterByCategory(category)
        const valuesMap = new Map(), descriptionsMap = new Map()
        targetWords.filter(filterByCategory)
            .forEach(x => {
                valuesMap.set(x.key, x.value)
                descriptionsMap.set(x.key, x.description)
            })
        const words = []
        sourceWords.filter(filterByCategory)
            .forEach(x => {
                const options = wordsService.#createOptions(x.key, valuesMap, x.category)
                if (!options)
                    return;
                words.push({
                    ...x,
                    description: x.description ?? descriptionsMap.get(x.key),
                    options: options
                })
            })
        return words;
    }
    //
    static #getFilterByCategory = (category) => {
        if (category.startsWith(':'))
            category = category.substring(1)
        if (category === 'all')
            return (x) => true;
        return (x) => (x.category === category);
    }
    static #createOptions(key, valuesMap, category) {
        const value = valuesMap.get(key)
        if (!value)
            return null;
        const options = [
            { key: key, value: value, isCorrect: true }
        ]
        const keysAndValues = Array.from(valuesMap)
        wordsService.#shuffleArray(keysAndValues)
        for (const [k, v] of keysAndValues) {
            if (k === key)
                continue;
            if (options.push({ key: k, value: v }) > 3)
                break;
        }
        wordsService.#shuffleArray(options)
        options.category = category
        return options;
    }
    static #shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}