import type { AuthSession, User } from "@supabase/supabase-js"
import { get, writable } from "svelte/store"

export const session = (() => {
  const store = writable<AuthSession | null>()

  return {
    ...store,
    getUser: (): User | null => {
      return get(store)?.user ?? null
    }
  }
})()
