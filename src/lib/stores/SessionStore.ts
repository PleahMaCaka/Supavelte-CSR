import type { AuthSession } from "@supabase/supabase-js"
import { writable } from "svelte/store"


export const sessionStore = writable<AuthSession | null>()
