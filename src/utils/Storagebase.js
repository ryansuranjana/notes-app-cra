class Storagebase {
    static get(key) {
        const datas = localStorage.getItem(key)
        return JSON.parse(datas)
    }

    static getById(key, id) {
        const datas = JSON.parse(localStorage.getItem(key))
        const result = datas.find((value) => value.id === id)
        return result
    }

    static store(key, value) {
        const datas = JSON.parse(localStorage.getItem(key))
        datas.push(value)
        return localStorage.setItem(key, JSON.stringify(datas))
    }

    static update(key, id, value) {
        const datas = JSON.parse(localStorage.getItem(key))
        const datasFilter = datas.filter((data) => data.id !== id)
        datasFilter.push(value)
        return localStorage.setItem(key, JSON.stringify(datasFilter))
    }

    static delete(key, id) {
        const datas = JSON.parse(localStorage.getItem(key))
        const datasFilter = datas[0].filter((data) => data.id !== id)
        return localStorage.setItem(key, JSON.stringify(datasFilter))
    }
}

export default Storagebase