export default class progressService {
    static getProgress(category) {
        const strProgress = localStorage.getItem(category)
        if (strProgress) {
            const progress = progressService.#parseProgress(strProgress)
            return progressService.#calcProgress(progress)
        }
        return { progress: 0, errors: 0 };
    }
    static getProgressByKeyword(category, keyword) {
        const strProgress = localStorage.getItem(category)
        if (strProgress) {
            const progress = progressService.#parseProgress(strProgress)
            return progressService.#calcProgressByKeyword(progress, keyword)
        }
        return { progress: 0, errors: 0 };
    }
    // set status
    static setCorrect(category, keyword) {
        const strProgress = localStorage.getItem(category)
        if (strProgress) {
            const progress = progressService.#parseProgress(strProgress)
            const value = progress.keys.get(keyword) ?? 0
            // we do skip any progress above some predefined value
            const newValue = Math.min(value + 1, progressService.#MAX_PROGRESS_PER_KEY)
            if (value !== newValue) {
                progress.keys.set(keyword, newValue)
                localStorage.setItem(category, progressService.#stringifyProgress(progress))
            }
        }
    }
    static setError(category, keyword) {
        const strProgress = localStorage.getItem(category)
        if (strProgress) {
            const progress = progressService.#parseProgress(strProgress)
            const value = progress.keys.get(keyword) ?? 0
            // we reset any progress when error happens
            const newValue = (value >= 0) ? -1 :
                // we do skip any progress above some predefined value
                Math.max(value - 1, -progressService.#MAX_PROGRESS_PER_KEY)
            if (value !== newValue) {
                progress.keys.set(keyword, newValue)
                localStorage.setItem(category, progressService.#stringifyProgress(progress))
            }
        }
    }
    // init/reset
    static setTotalCount(category, count) {
        const strProgress = localStorage.getItem(category)
        if (!strProgress)
            progressService.#setDefault(category, count);
        else {
            const progress = JSON.parse(strProgress)
            if (progress.count !== count) {
                progress.count = count
                localStorage.setItem(category, progressService.#stringifyProgress(progress))
            }
        }
    }
    static reset(category, count) {
        localStorage.removeItem(category)
        progressService.#setDefault(category, count);
    }
    //
    static #setDefault(category, count) {
        localStorage.setItem(category, progressService.#stringifyProgress({
            count: count,
            keys: new Map(),
        }));
    }
    // progress calculation
    static #MAX_PROGRESS_PER_KEY = 3
    static #calcProgress(progress) {
        let currentProgress = 0, errorsCount = 0
        for (const value of progress.keys.values()) {
            if (value >= 0)
                currentProgress += value
            else errorsCount++
        }
        const maxProgress = progress.count * progressService.#MAX_PROGRESS_PER_KEY
        const percent = Math.ceil((currentProgress / maxProgress) * 100)
        return { progress: percent, errors: errorsCount }
    }
    static #calcProgressByKeyword(progress, keyword) {
        const currentProgress = progress.keys.get(keyword) ?? 0
        const percent = Math.ceil((currentProgress / progressService.#MAX_PROGRESS_PER_KEY) * 100)
        if (currentProgress < 0)
            return { progress: -percent, errors: -currentProgress }
        return { progress: percent, errors: 0 }
    }
    // stringify/parse for progress
    static #stringifyProgress(strProgress) {
        function replacer(key, value) {
            if (value instanceof Map)
                return { dataType: 'Map', value: [...value] };
            return value;
        }
        return JSON.stringify(strProgress, replacer);
    }
    static #parseProgress(strProgress) {
        function reviver(key, value) {
            if (typeof value === 'object' && value !== null) {
                if (value.dataType === 'Map')
                    return new Map(value.value);
            }
            return value;
        }
        return JSON.parse(strProgress, reviver);
    }
}