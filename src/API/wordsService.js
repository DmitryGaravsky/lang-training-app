export default class wordsService {
    static getWordsWithOptions(sourceWords, targetWords) {
        const valuesMap = new Map(), 
            descriptionsMap = new Map()
        targetWords.forEach(x => {
            valuesMap.set(x.key, x.value)
            descriptionsMap.set(x.key, x.description)
        })
        const words = []
        sourceWords.forEach(x => {
            const options = wordsService.#createOptions(x.key, valuesMap)
            if(!options)
                return;
            wordsService.#shuffleArray(options)
            words.push({
                ...x,
                description: x.description ?? descriptionsMap.get(x.key),
                options: options
            })
        })
        return words;
    }
    //
    static #createOptions(key, valuesMap) {
        const value = valuesMap.get(key)
        if(!value)
            return null;
        const options = [
            { key: key, value: value, isCorrect: true }
        ]
        for (const [k, v] of valuesMap) {
            if (k === key)
                continue;
            if (options.push({ key: k, value: v }) > 3)
                break;
        }
        return options;
    }
    static #shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}