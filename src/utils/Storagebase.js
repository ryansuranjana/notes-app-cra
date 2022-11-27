class Storagebase {
    static get(key) {
        const datas = localStorage.getItem(key)
        return JSON.parse(datas)
    }

    static getById(key, id) {
        const datas = JSON.parse(localStorage.getItem(key))
        const result = datas[0].find((value) => value.id === id)
        return result
    }

    static store(key, value) {
        const datas = JSON.parse(localStorage.getItem(key))
        datas[0].push(value)
        return localStorage.setItem(key, JSON.stringify(datas))
    }

    static update(key, id, value) {
        const datas = JSON.parse(localStorage.getItem(key))
        const datasFilter = datas[0].filter((data) => data.id !== id)
        datasFilter.push(value)
        const result = [datasFilter]
        return localStorage.setItem(key, JSON.stringify(result))
    }

    static delete(key, id) {
        const datas = JSON.parse(localStorage.getItem(key))
        const datasFilter = datas[0].filter((data) => data.id !== id)
        const result = [datasFilter]
        return localStorage.setItem(key, JSON.stringify(result))
    }
}

export default Storagebase