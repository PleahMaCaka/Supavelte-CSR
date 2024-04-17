// noinspection JSUnusedGlobalSymbols

import type { User } from "@supabase/supabase-js"

declare global {
    namespace App {
        // interface Error {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}

        interface ImportMetaEnv {
            readonly VITE_PUBLIC_SUPABASE_URL: string
            readonly VITE_PUBLIC_SUPABASE_ANON_KEY: string
        }
        interface Locals {
            user: User | null
        }
    }
}

export {}
