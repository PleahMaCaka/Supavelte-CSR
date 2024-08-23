import { writable } from "svelte/store"

export interface State {
    unreadNotify: boolean
}

export const stateStore = (() => {
  const store = writable<State>({
    unreadNotify: true
  })

  return {
    ...store
  }
})()
