export const actions = (type, item, id) => {
    return {
        type: type,
        item: item,
        id: id
    }
}

//costanti per il primo parametro delle actions

export const ADD = 'ADD'
export const REMOVE = 'REMOVE'
export const RESET = 'RESET'
