import type { Database } from "@lib/types/gen/supabase"
import { createClient } from "@supabase/supabase-js"

export const supa = createClient<Database>(
    import.meta.env.VITE_PUBLIC_SUPABASE_URL,
    import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
)
