export const actions = (type, item) => {
    return {
        type: type,
        item: item,
    }
}

//costanti per il primo parametro delle actions

export const ADD = 'ADD'
export const REMOVE = 'REMOVE'
export const RESET = 'RESET'
