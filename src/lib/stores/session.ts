import type { AuthSession, User } from "@supabase/supabase-js"
import { get, writable } from "svelte/store"

export const session = (() => {
    const store = writable<AuthSession | null>()

    return {
        ...store,
        getUser: async (): Promise<User | null> => {
            return get(session)?.user ?? null
        }
    }
})()
