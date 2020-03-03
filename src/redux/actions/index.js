//costanti per il primo parametro delle actions
export const ADD = 'ADD'
export const REMOVE = 'REMOVE'
export const RESET = 'RESET'

export function add(item) {
  return {
    type: ADD,
    payload: item
  }
}

export function remove(item) {
  return {
    type: REMOVE,
    payload: item
  }
}

export function reset() {
  return {
    type: RESET,
    payload: null
  }
}
